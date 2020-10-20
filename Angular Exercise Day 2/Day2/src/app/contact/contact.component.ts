import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  info = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.minLength(5)]),
    lastName: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
  });
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    // to take the values from the form you can select the property that have the formGroup and then just add .value
    if(this.info.valid){
      var a = this.info.value;
      console.log(a)
    }
    }
}
