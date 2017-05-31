export interface AppNotification {
  type: NotificationType;
  message: string;
  color: string;
  background: string;
}

export interface NotifyOptions {
  color: string; // css color property
  background: string; // css background property
  timer: number; // in milliseconds
}

export type NotificationType = 'success' | 'error';