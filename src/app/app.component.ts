import { Component, ViewChild, ViewContainerRef,AfterViewInit,ElementRef,OnInit } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { InitService } from './init.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'hotelInventoryApp';
  role="admin";

  @ViewChild('name',{static:true}) name!: ElementRef;

ngOnInit(): void {
  this.name.nativeElement.innerHTML="I am new Title"
   //dynamically accessed the html element 
  }
constructor(private initService:InitService){
console.log(initService.config)
}
/*   @ViewChild('user', {read:ViewContainerRef}) vcr! : ViewContainerRef;
//   ngAfterViewInit(): void {
//     const componentRef  = this.vcr.createComponent(RoomsComponent);
      //dynamically loading the roomscomponent using viewchild
//   }
*/
}