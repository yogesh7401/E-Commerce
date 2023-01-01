import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignINComponent implements OnInit {

  email : string = ''
  password : string = ''
  constructor() { }

  handleLogin(e : any) {
    console.log(this.email,this.password);
    alert("Work in Progress")
  }

  ngOnInit(): void {
  }

}
