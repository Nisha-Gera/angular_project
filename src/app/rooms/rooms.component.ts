import {
  Component,
  DoCheck,
  OnInit,
  ViewChild,
  AfterViewInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Room } from './rooms';
import { RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';
import { HeaderComponent } from '../header/header.component';
import { Observable } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {
  hotelName = 'Hilton Hotel';
  numberOfRoomsAvailable = 10;
  hideRooms = true;

  @ViewChild(HeaderComponent, { static: true })
  headerComponent!: HeaderComponent;
  /* static;true is used when we have ansynochrnouse code in the code which can cause delay..by default its false!
  only takes first instance..in case you need to add multiple things..use /ViewChildren instead! */

  constructor(private roomsService: RoomsService) {}
  // should be used to inject something
  // constructor should not have any blocking code
  //private is a modifier

  
  stream = new Observable((observer) => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
  });
  totalByte = 0;

  ngOnInit(): void {
    this.roomsService.getPhotos().subscribe
    ((event)=>{
      switch (event.type){
        case HttpEventType.Sent:{
          console.log("Request has been sent!");
          break;
        }
        case HttpEventType.ResponseHeader:{
          console.log("Request successful")
          break;
        }
        case HttpEventType.DownloadProgress:{
        this.totalByte += event.loaded;
        break;
        }
        case HttpEventType.Response:{
          console.log(event.body)
        }
      }
      // console.log(data)
    })
    this.stream.subscribe(
      {
        next: (data)=>{console.log(data)},
        error:(err)=> console.error('Error:'+ err),
        complete: ()=>{console.log("complete")},
      }
      );
    this.stream.subscribe((data)=>{console.log(data)});
    this.roomsService.getRooms().subscribe((rooms) => {
      this.roomList = rooms;
    });
  }
  //any logic you want to use ------add anything that you want to do after initialising your code.

  ngDoCheck(): void {
    console.log('on changes is called!');
  }

  ngAfterViewInit(): void {
    // console.log(this.headerComponent)
    this.headerComponent.title = 'Rooms header';
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  room: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };
  roomList: RoomList[] = [];

  selectedRoom!: RoomList;

  selectRoom(room: RoomList) {
    // function
    this.selectedRoom = room;
  }

  addRoom() {
    console.log(this.headerComponent);
    const room: RoomList = {
      roomNumber: '4',
      roomType: 'Delux Room',
      amenities: 'AC , Free WIFI, TV, Bathroom, Kitchen',
      price: 1200,
      photos: 'https://www.pexels.com/photo/beige-concrete-building-70441/',
      checkInTime: new Date('11-nov-2023'),
      checkOutTime: new Date('12-nov-2023'),
      rating: 2.6,
    };
    // this.roomList.push(room); //pushing complete data again
    // this.roomList = [...this.roomList, room]; //keeping the old data and add other data in the existing one

    this.roomsService.addRoom(room).subscribe((data)=>{
      this.roomList = data;
    })
  }
  editRoom(){
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'Delux Room',
      amenities: 'AC , Free WIFI, TV, Bathroom, Kitchen',
      price: 1909200,
      photos: 'https://www.pexels.com/photo/beige-concrete-building-70441/',
      checkInTime: new Date('11-nov-2023'),
      checkOutTime: new Date('12-nov-2023'),
      rating: 2.6,
    };    
    this.roomsService.editRoom(room).subscribe((data)=>{
      this.roomList=data;
    })
  }

  deleteRoom(){
    this.roomsService.delete('3').subscribe((data)=>{
      this.roomList=data;
    })
  }

}
