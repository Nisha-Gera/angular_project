import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges,OnDestroy } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';
@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class RoomListComponent implements OnInit,OnChanges,OnDestroy {
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  @Input() rooms: RoomList[] = [];

  @Output() selectedRoom = new EventEmitter<RoomList>(); //output is basically an event

  selectRoom(room: RoomList) { //function
    this.selectedRoom.emit(room);
  }
  
  ngOnDestroy(): void {
    console.log('OnDestroy is called!')
  }
}
  