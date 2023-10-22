import { Component, OnInit } from '@angular/core';
// import {  } from "module";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = '';

  constructor(){

  }
  ngOnInit(): void {
    
  }

}
