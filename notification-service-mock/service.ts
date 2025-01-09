import {
  AppNotification,
  DeleteNotificationRequest,
  GetNotificationsRequest,
  GetNotificationsResponse,
  OnNotificationDeletedArgs,
  OnNotificationReceivedArgs,
  PublishNotificationRequest,
} from "../types/types";

export interface NotificationService {
  /**
   * Get paginated notifications, will return up to 10 notifications per page.
   * The response contains the id of the first notification on the next page.
   * Undefined will be returned when there are no more pages.
   * @param {GetNotificationsRequest} args Request args containing current page id
   * @returns {GetNotificationsResponse} Paginated notifications, returns newest first
   */
  getNotifications(
    args: GetNotificationsRequest
  ): Promise<GetNotificationsResponse>;

  /**
   * Delete a single notification by its id.
   * Triggers onNotificationDeleted handler.
   * @param {DeleteNotificationRequest} args Request args containing id of the to-be-deleted notification
   * @returns {void}
   */
  deleteNotification(args: DeleteNotificationRequest): Promise<void>;

  /**
   * Publish a new notification.
   * Returns the newly created notification and
   * triggers onNotificationReceived.
   * @param {PublishNotificationRequest} args Request args containing the payload of the to-be-created notification
   * @returns {AppNotification}
   */
  publishNotification(
    args: PublishNotificationRequest
  ): Promise<AppNotification>;

  /**
   * Register callback when a new notification was received
   * @param {function} args callback function, invoked when a new notification is received
   * @returns {function} return function will remove the handler on call
   */
  onNotificationReceived(
    handler: (args: OnNotificationReceivedArgs) => void
  ): () => void;

  /**
   * Register callback when a new notification was deleted
   * @param {function} args callback function, received when a notification is deleted
   * @returns {function} return function will remove the handler on call
   */
  onNotificationDeleted(
    handler: (args: OnNotificationDeletedArgs) => void
  ): () => void;
}
