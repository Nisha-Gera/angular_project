import { Component, OnInit } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss'],
})
export class RoomsAddComponent implements OnInit {
  constructor(private roomsService: RoomsService) {}
  ngOnInit(): void {}

  successMessage: string = '';

  room: RoomList = {
    roomNumber: '',
    roomType: '',
    amenities: '',
    checkInTime: new Date(),
    checkOutTime: new Date(),
    photos: '',
    price: 0,
    rating: 0,
  };

  AddRoom(roomsForm : NgForm) {
    this.roomsService.addRoom(this.room).subscribe((data) => {
      this.successMessage = 'Room added successfully!';
      roomsForm.resetForm({roomNumber: '',
      roomType: '',
      amenities: '',
      checkInTime: new Date(),
      checkOutTime: new Date(),
      photos: '',
      price: 0,
      rating: 0,})
    });
  }
}
