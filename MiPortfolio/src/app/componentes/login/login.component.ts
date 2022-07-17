import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EditServiceService } from 'src/app/servicios/edit-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  btn:string= 'Iniciar Sesión';
  btnClick = new EventEmitter();
  cambioBtn:boolean = false;
  subscription?: Subscription;
  login:boolean=true;
  logout:boolean=false;
  usuario:string='';
  contra:string='';

  constructor(public editServiceService:EditServiceService) { 
    
   }
  
  ngOnInit(): void { }
  
  displayStyle = "none";
  
  
  openPopup() {
    this.displayStyle = "block";
    this.login = !this.login;
    this.btnClick.emit();
  }
  
  closePopup() {
    this.displayStyle = "none";
  }
  
  autenticar(){

    if ((this.usuario == "Romina") && (this.contra == "1234")){
      // console.log(this.usuario + this.contra);
      this.editServiceService.valorIcon = true;
      this.btn = 'Salir edición';
      this.displayStyle = "none";
      }else{
         alert("El usuario o contraseña no coincide!")
    }
  }

  toggleEdit(){
    this.editServiceService.toggleEdit();
  }

  edicion(){
    if (this.btn == 'Salir edición'){
      this.editServiceService.valorIcon = false;
      this.btn = 'Iniciar Sesión';
      this.displayStyle = "none";
      window.location.reload();
    }
  }

}

 
  


