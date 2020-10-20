import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	


  countClick(){
         
 }

 cars = [
   {
     type: "Audi",
     price: 30000
   },{
     type: "Land Rover",
     price: 50000
   },{
     type:"Mercedes",
     price: 40000
   },
 ];

   constructor() { }

  ngOnInit() {
  }

}
