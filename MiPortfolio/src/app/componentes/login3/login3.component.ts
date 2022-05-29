import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login3',
  templateUrl: './login3.component.html',
  styleUrls: ['./login3.component.css']
})
export class Login3Component implements OnInit {

login:boolean=true;


  constructor() {
    
  }

  ngOnInit(): void {
  }

  displayStyle = "none";
  
  
  openPopup() {
    this.displayStyle = "block";
    this.login = !this.login;
  }

}
