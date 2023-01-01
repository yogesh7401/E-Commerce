import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/types/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  UserData : UserData = {
    name: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    password: '',
    password1: ''
  }

  constructor() { }
  
  page : number = 1

  handleSignUp(e  : any) {
    e.preventDefault()
    alert("Work in progress")
    return 0
  }

  ngOnInit(): void {
  }

}
