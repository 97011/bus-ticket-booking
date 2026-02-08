import { Bookings } from "../../core/interfaces/booking.interface";

export function optimizeBoarding(list: Bookings[]) {
  return list.sort((a, b) => {
    const maxA = Math.max(...a.seats.map(seat => +seat.slice(1)));
    const maxB = Math.max(...b.seats.map(seat => +seat.slice(1)));
    return maxB - maxA;
  });
}
