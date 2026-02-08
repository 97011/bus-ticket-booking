import { inject, Injectable } from '@angular/core';
import { Storage } from './storage';
import { Bookings } from '../interfaces/booking.interface';

@Injectable({
  providedIn: 'root',
})
export class Booking {
  storage = inject(Storage)
  getAll(): Bookings[] {
    return this.storage.get();
  }

  saveAll(list: Bookings[]) {
    this.storage.set(list);
  }

  getByDate(date: string) {
    return this.getAll().filter(get => get.travelDate === date);
  }

  create(booking: Bookings) {
    const all = this.getAll();
    all.push(booking);
    this.saveAll(all);
  }

  generateId() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }
  update(updated: Bookings) {
    const all = this.getAll().map(get =>
      get.bookingId === updated.bookingId ? updated : get
    );
    this.saveAll(all);
  }
}
