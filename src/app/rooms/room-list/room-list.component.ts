import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { RoomList } from '../rooms';
@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() rooms: RoomList[] = [];

  @Output() selectedRoom = new EventEmitter<RoomList>(); //event

  selectRoom(room: RoomList) { //function
    this.selectedRoom.emit(room);
  }
}
