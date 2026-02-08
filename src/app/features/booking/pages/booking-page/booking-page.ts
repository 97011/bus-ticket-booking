import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SeatGrid } from '../../../../shared/components/seat-grid/seat-grid';
import { Booking } from '../../../../core/services/booking';
@Component({
  selector: 'app-booking-page',
  imports: [ReactiveFormsModule, SeatGrid, CommonModule],
  templateUrl: './booking-page.html',
  styleUrl: './booking-page.css',
})
export class BookingPage implements OnInit {
  seats: string[] = [];
  bookedSeats: string[] = [];
  today = new Date().toISOString().split('T')[0];
  bookingForm!: FormGroup
  constructor(private readonly fb: FormBuilder, private readonly bookingSvc: Booking) {
    this.bookingForm = this.fb.group({
      date: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
  }
  ngOnInit() {
    this.bookingForm.get('date')?.valueChanges.subscribe(date => {
      if (!date) return;
      const bookings = this.bookingSvc.getByDate(date);
      this.bookedSeats = bookings.flatMap(b => b.seats);
      this.seats = [];
    });
  }
  book() {
    const { date, mobile } = this.bookingForm.value;
    const existing = this.bookingSvc.getByDate(date)
      .filter(b => b.mobile === mobile)
      .reduce((a, b) => a + b.seats.length, 0);
    if (existing + this.seats.length > 6) {
      alert('Max 6 seats limit');
      return;
    }
    const booking = {
      bookingId: this.bookingSvc.generateId(),
      travelDate: date!,
      mobile: mobile!,
      seats: this.seats,
      boarded: false
    };
    this.bookingSvc.create(booking);
    this.bookingForm.reset();
    this.bookedSeats = [];
    alert(`Confirmed!
      ID:${booking.bookingId}
      Seats:${booking.seats}`);
  }
  allowNumbersOnly(event: KeyboardEvent): void {
    const allowedKeys = [
      'Backspace',
      'Delete',
      'ArrowLeft',
      'ArrowRight',
      'Tab'
    ];
    if (
      allowedKeys.includes(event.key) ||
      /^\d$/.test(event.key)
    ) {
      return;
    }
    event.preventDefault();
  }
}
