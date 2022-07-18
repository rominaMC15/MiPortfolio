import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { FaLayersTextComponent } from '@fortawesome/angular-fontawesome';
import { AcercaDe } from 'src/app/models/acerca-de.model';
import { EditServiceService } from 'src/app/servicios/edit-service.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  miPortfolio:any;
  edit:boolean=false;
  editable:AcercaDe={id:0,presentacion:"Mi nombre es",nombre:"",puesto:"",info:"",img:"../../../assets/tecno.jpg"};

  constructor(private datosPortfolio:PortfolioService, public editServiceService:EditServiceService) { }

    public acercaDe : AcercaDe={id:0,presentacion:"Mi nombre es",nombre:"",puesto:"",info:"",img:"../../../assets/tecno.jpg"};
    public editDatos : AcercaDe | undefined;


  ngOnInit(): void {
 
    this.datosPortfolio.getDatos().subscribe(data => {
      this.acercaDe=data[0];
      // console.log(this.acercaDe);
    });

  };

  Editar(){
    this.edit=!this.edit;
    
    if(this.edit){
      this.editable.id = this.acercaDe.id;
      this.editable.nombre = this.acercaDe.nombre;
      this.editable.puesto = this.acercaDe.puesto;
      this.editable.info = this.acercaDe.info;
      this.editable.img = this.acercaDe.img;
    }

  }

  public getDatos():void{
    this.datosPortfolio.getDatos().subscribe({
      next: (response: AcercaDe) =>{
        this.acercaDe=response;
      }
    })
  }


  onEditar(){
    
    console.log(this.editable)
    this.edit=false;

    this.datosPortfolio.actualizarDatos(this.editable).subscribe({
          next: (response: AcercaDe) => {
            console.log(response)
            alert("Sus datos han sido actualizados!")
            this.ngOnInit();
          }
        })
  }
    
  

}

