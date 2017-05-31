import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {AppNotification, NotifyOptions} from "./notification";

@Injectable()
export class NotifyService {

  constructor() {}

  success(message, options?: NotifyOptions) {
    this._notifications.next({
      type: 'success',
      message: message,
      color: options && options.color || '#3C763D',
      background: options && options.background || '#DFF0D8',
    });
  }

  error(message, options?: NotifyOptions) {
    this._notifications.next({
      type: 'error',
      message: message,
      color: options && options.color || '#A94442',
      background: options && options.background || '#F2DEDE',
    })
  }

  private _notifications: Subject<AppNotification> = new Subject();
  public get notifications() { //TODO: make this const somehow. static?
    return this._notifications;
  }


}
