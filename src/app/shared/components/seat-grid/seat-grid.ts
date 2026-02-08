import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateSeats } from '../../utils/seat-generator.util';

@Component({
  selector: 'app-seat-grid',
  imports: [CommonModule],
  templateUrl: './seat-grid.html',
  styleUrl: './seat-grid.css',
})
export class SeatGrid implements OnChanges {
  @Input() booked: string[] = [];
  @Output() seatChange = new EventEmitter<string[]>();
  seats = generateSeats();
  selected: string[] = [];
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['booked']) {
      this.selected = [];
      this.seatChange.emit([]);
    }
  }
  toggle(selectedSeat: string) {
    if (this.booked.includes(selectedSeat)) return;
    if (this.selected.includes(selectedSeat)) {
      this.selected =
        this.selected.filter(seat => seat !== selectedSeat);
    } else {
      if (this.selected.length >= 6) return;
      this.selected.push(selectedSeat);
    }
    this.seatChange.emit(this.selected);
  }
}
