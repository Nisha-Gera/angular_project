import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: 'employee', component: EmployeeComponent }, //default routes
  { path: 'rooms', component: RoomsComponent },
  { path: 'rooms/login', component: LoginComponent },
  { path: 'rooms/add', component: RoomsAddComponent },
  { path: '', redirectTo: '/rooms', pathMatch: 'full' },
  { path: 'rooms/:id', component: RoomsBookingComponent },//dynamic route
  { path: '**', component: NotFoundComponent }, //wild card route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
