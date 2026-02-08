import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Storage {
  storageKey: string = 'bus-bookings';

  get() {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  set(data: any) {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

}
