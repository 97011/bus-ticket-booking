#  Bus Ticket Booking System (Angular 19)

A simple and efficient **Bus Ticket Booking System** built for bus conductors to manage ticket bookings and passenger boarding smoothly.

This project focuses on:

- Clean code & architecture  
- Optimized logic  
- Good UI/UX  
- Performance  
- Real-world constraints handling  

---

#  Features

##  Booking Module

- Select travel date  
- Enter mobile number (10-digit validation)  
- 2×2 seat layout (15 rows, 60 seats total)  
- Seat states:
  - Available
  - Selected
  - Booked
- Maximum **6 seats per mobile per day**
- Booking confirmation popup with:
  - Booking ID
  - Travel date
  - Mobile number
  - Selected seats
- Date-based seat availability

---

##  Boarding Module

- Defaults to today’s date  
- Displays bookings by date  
- Boarding optimization algorithm  
- Mark passenger as boarded  
- Click-to-call passenger  
- Boarding status saved in LocalStorage  
- Empty state when no bookings exist

---

#  Boarding Optimization Logic

Boarding order is optimized to reduce blocking:

- Passengers seated farther board first  
- Prevents aisle blocking  
- Minimizes total boarding time  
- Group bookings board together  

### Example Optimal Order

