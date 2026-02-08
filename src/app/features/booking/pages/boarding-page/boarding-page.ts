import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Booking } from '../../../../core/services/booking';
import { optimizeBoarding } from '../../../../shared/utils/boarding-algorithm.util';
import { BookingList, Bookings } from '../../../../core/interfaces/booking.interface';
@Component({
  selector: 'app-boarding-page',
  imports: [FormsModule, CommonModule],
  templateUrl: './boarding-page.html',
  styleUrl: './boarding-page.css',
})
export class BoardingPage implements OnInit {
  today = new Date().toISOString().split('T')[0];
  date = this.today;
  bookingList: BookingList[] = [];
  service = inject(Booking);
  ngOnInit() {
    this.checkList()
  }
  checkList() {
    this.bookingList = optimizeBoarding(this.service.getByDate(this.date));
  }
  borderStatus(booking: Bookings) {
    booking.boarded = true;
    this.service.update(booking);
  }
}
