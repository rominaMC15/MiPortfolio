import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl ,Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { 
    
   }
  
  ngOnInit(): void { }


  
  
  displayStyle = "none";
  
  
  openPopup() {
    this.displayStyle = "block";
    this.login = !this.login;
  }
  
  closePopup() {
    this.displayStyle = "none";
  }
  
  
  login:boolean=true;
  logout:boolean=false;
  uname:string="";
  pwd:string="";
  user:string="";
  password:string="";
  pass2:string="";
  user2:string="";
  valor1:string="";
  valor2:string="";
  autenticar(){
    
    let valor1 = document.getElementById('uname') as HTMLInputElement
    let valor2 = document.getElementById('pwd') as HTMLInputElement
    
    // let uname = valor1?.value;
    // let password = valor2?.value;
    console.log(this.user2, this.pass2);
    

    if ((this.valor1 == "Romina") && (this.valor2 == "1234")){
      console.log(this.valor1 + this.valor2);
      this.logout = false;
      this.login = true;
      this.displayStyle = "none";


    }else{
      this.login = false;
      this.logout = true;
      alert("El usuario o contraseña no coincide!")
    }

  }

  
}

 
  


