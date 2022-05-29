import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  pass2:string="";
  user2:string="";  

  constructor() { }

  ngOnInit(): void {
  }

  autenticar(){
    
    // let valor1 = document.getElementById('uname') as HTMLInputElement
    // let valor2 = document.getElementById('pwd') as HTMLInputElement
    // let uname = valor1?.value;
    // let password = valor2?.value;
    console.log(this.user2, this.pass2);
    

    if ((this.user2 == "Romina") && (this.pass2 == "1234")){
      console.log("Entro al if");

    }else{
      alert("El usuario o contraseña no coincide!")
    }

  }
  
  

}