import { Component, Input, OnInit } from '@angular/core';
import { EditServiceService } from 'src/app/servicios/edit-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() btn:string='Iniciar Sesión'
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
  }
  
  closePopup() {
    this.displayStyle = "none";
  }
  
  autenticar(){

    if ((this.usuario == "Romina") && (this.contra == "1234")){
      console.log(this.usuario + this.contra);
      this.editServiceService.valorIcon = true;
      this.displayStyle = "none";
      }else{
         alert("El usuario o contraseña no coincide!")
    }
  }

}

 
  


