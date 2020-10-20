import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	clickCounter :number = 10;
  constructor() { }

  	 countClick(){
         this.clickCounter +=10;
 }

  ngOnInit() {
  }

}
