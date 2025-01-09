export interface AppNotification {
  id: string;
  title: string;
  content: string;
  created: Date;
}

export interface GetNotificationsResponse {
  notifications: AppNotification[];
  nextNotificationId?: string;
  total: number
}

export interface PublishNotificationRequest {
  title: string;
  content: string;
}

export interface DeleteNotificationRequest {
  id: string;
}

export interface GetNotificationsRequest {
  startWithNotificationId?: string;
}

export interface OnNotificationReceivedArgs extends AppNotification {}

export interface OnNotificationDeletedArgs {
  id: string;
}
