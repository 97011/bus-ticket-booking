import { Routes } from '@angular/router';
import { BookingPage } from './features/booking/pages/booking-page/booking-page';
import { BoardingPage } from './features/booking/pages/boarding-page/boarding-page';

export const routes: Routes = [
    { path: '', component: BookingPage },
    { path: 'boarding', component: BoardingPage }
];
