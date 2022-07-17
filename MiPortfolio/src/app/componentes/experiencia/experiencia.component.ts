import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { EditServiceService } from 'src/app/servicios/edit-service.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaList:any;
  edit:boolean=false;

  constructor(private datosPortfolio:PortfolioService, public editServiceService:EditServiceService) { }

  public experiencia : Experiencia[] = [];
  public editDatos : Experiencia | undefined;
  exp:Experiencia={"id":0,"puesto":"","empresa":"","img":"","modo":"","comienzo":"","fin":""}

  ngOnInit(): void {
    // this.datosPortfolio.obtenerDatos().subscribe(data=>{
    //   this.experienciaList=data.experiencia;
    // })

    this.getDatosExperiencia();
 }

  Editar(dato:Experiencia){
    this.edit=!this.edit;
    this.exp=dato;
  }

  onEditar(){
    this.datosPortfolio.actualizarDatosExp(this.exp).subscribe({
      next: (response:Experiencia) => {
        alert("Sus datos han sido modificados!")
        this.ngOnInit();
      }
    })
  }

  public getDatosExperiencia():void{
    this.datosPortfolio.getDatosExperiencia().subscribe({
      next: (response: Experiencia[]) =>{
        this.experiencia=response;
      }
    })
  }

}
