import { NotificationService } from "./service";
import {
  GetNotificationsRequest,
  GetNotificationsResponse,
  DeleteNotificationRequest,
  PublishNotificationRequest,
  OnNotificationReceivedArgs,
  OnNotificationDeletedArgs,
  AppNotification,
} from "../types/types";
import { uuid } from "../utils/utils";

export class ExampleNotificationService implements NotificationService {
  private static readonly pageSize = 10;

  private readonly notifications: AppNotification[] = [];
  private readonly createNotificationsAbortController = new AbortController();
  private readonly submitCallbacks: ((
    args: OnNotificationReceivedArgs
  ) => void)[] = [];
  private readonly deleteCallbacks: ((
    args: OnNotificationDeletedArgs
  ) => void)[] = [];

  constructor() {
    this.notifications = this.randomNotifications(105);
    this.createRandomNotificationsDelayed();
  }

  private randomNotifications = (amount: number): AppNotification[] => {
    const notifications: AppNotification[] = Array.from(
      { length: amount },
      (_, index) => {
        const globalIndex = this.notifications.length + index;
        return {
          content: `Random content ${globalIndex}`,
          title: `Notification #${globalIndex}`,
          created: new Date(globalIndex * 60 * 1000),
          id: uuid(),
        };
      }
    );
    return notifications.sort(
      (a, b) => b.created.getTime() - a.created.getTime()
    );
  };

  private async createRandomNotificationsDelayed() {
    while (!this.createNotificationsAbortController.signal.aborted) {
      try {
        await this.waitUpto(5000, this.createNotificationsAbortController);
        await this.publishNotification({
          title: `Delayed random notification ${this.notifications.length + 1}`,
          content: `Delayed random notification content ${
            this.notifications.length + 1
          }`,
        });
      } catch (error) {
        /* */
      }
    }
  }

  private async waitUpto(
    ms: number,
    abortController?: AbortController
  ): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      let timeout: any;
      const abortHandler = () => {
        if (timeout) {
          clearTimeout(timeout);
          reject(new Error("aborted"));
        }
      };

      abortController?.signal.addEventListener("abort", abortHandler);
      timeout = setTimeout(() => {
        abortController?.signal.removeEventListener("abort", abortHandler);
        resolve();
      }, Math.random() * ms);
    });
  }
  private throwRandomError(): void {
    if (Math.random() > 0.8) {
      throw new Error("random error");
    }
  }

  private invokeSubmitHandlers(notification: AppNotification) {
    // decouple from event loop
    this.submitCallbacks.forEach((callback) =>
      setTimeout(() => {
        callback(notification);
      }, 0)
    );
  }

  private invokeDeleteHandlers(id: string) {
    // decouple from event loop
    this.deleteCallbacks.forEach((callback) =>
      setTimeout(() => {
        callback({ id });
      }, 0)
    );
  }

  stopCreatingNotifications() {
    this.createNotificationsAbortController.abort();
  }

  async getNotifications(
    args: GetNotificationsRequest
  ): Promise<GetNotificationsResponse> {
    await this.waitUpto(1000);

    const sorted = [
      ...this.notifications.sort(
        (a, b) => b.created.getTime() - a.created.getTime()
      ),
    ];

    const startIndex = args.startWithNotificationId
      ? this.notifications.findIndex(
          (notification) => notification.id === args.startWithNotificationId
        )
      : 0;

    if (startIndex < 0) {
      throw new Error(
        `notification with id ${args.startWithNotificationId} not found`
      );
    }

    const page = sorted.splice(
      startIndex,
      ExampleNotificationService.pageSize + 1
    );

    const next = page.splice(ExampleNotificationService.pageSize, 1);

    this.throwRandomError();
    return {
      nextNotificationId: next.length > 0 ? next[0].id : undefined,
      total: this.notifications.length,
      notifications: page,
    };
  }

  async deleteNotification(args: DeleteNotificationRequest): Promise<void> {
    await this.waitUpto(1000);
    const index = args.id
      ? this.notifications.findIndex(
          (notification) => notification.id === args.id
        )
      : 0;

    if (index < 0) {
      throw new Error(`notification with id ${args.id} not found`);
    }

    this.throwRandomError();

    this.notifications.splice(index, 1);

    // resolve promise before onNotificationReceived handler is triggered
    setTimeout(() => {
      this.invokeDeleteHandlers(args.id);
    }, 100);
  }

  async publishNotification(
    args: PublishNotificationRequest
  ): Promise<AppNotification> {
    await this.waitUpto(1000);
    this.throwRandomError();

    const newNotification: AppNotification = {
      ...args,
      created: new Date(),
      id: uuid(),
    };

    this.notifications.push(newNotification);

    // resolve promise before onNotificationReceived handler is triggered
    setTimeout(() => {
      this.invokeSubmitHandlers(newNotification);
    }, 100);

    return newNotification;
  }

  onNotificationReceived(
    handler: (args: OnNotificationReceivedArgs) => void
  ): () => void {
    this.submitCallbacks.push(handler);
    return () => {
      const index = this.submitCallbacks.findIndex(
        (arrHandler) => arrHandler === handler
      );
      if (index < 0) throw new Error("handler not found");
      this.submitCallbacks.splice(index, 1);
    };
  }

  onNotificationDeleted(
    handler: (args: OnNotificationDeletedArgs) => void
  ): () => void {
    this.deleteCallbacks.push(handler);
    return () => {
      const index = this.deleteCallbacks.findIndex(
        (arrHandler) => arrHandler === handler
      );
      if (index < 0) throw new Error("handler not found");
      this.deleteCallbacks.splice(index, 1);
    };
  }
}
