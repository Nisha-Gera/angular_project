import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent implements OnInit{
  id:number =0;
  id$ = this.router.paramMap.pipe(map(params => params.get('roomid')));

constructor(private router:ActivatedRoute){} //router is service which is added by default by router module

ngOnInit():void {
// this.id$ =
  // this.router.params.subscribe((params)=>{
  //   this.id = params['roomid']});
  //   // console.log(this.id)})              
// this.id = this.router.snapshot.params['roomid']    ;
// console.log(params)})
}
}
