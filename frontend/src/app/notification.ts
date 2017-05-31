export interface AppNotification {
  type: NotificationType,
  message: string
}

export type NotificationType = 'success' | 'error';