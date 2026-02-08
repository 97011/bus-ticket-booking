export function generateSeats(): string[] {
  const seats: string[] = [];
  const cols = ['A', 'B', 'C', 'D'];
  for (let seat = 1; seat <= 15; seat++) {
    cols.forEach(col => seats.push(col + seat));
  }
  return seats;
}
