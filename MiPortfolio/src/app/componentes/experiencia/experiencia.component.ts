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

  ngOnInit(): void {
    // this.datosPortfolio.obtenerDatos().subscribe(data=>{
    //   this.experienciaList=data.experiencia;
    // })

    this.getDatosExperiencia();
 }

  Editar(){
    this.edit=!this.edit;
  }

  public getDatosExperiencia():void{
    this.datosPortfolio.getDatosExperiencia().subscribe({
      next: (response: Experiencia[]) =>{
        this.experiencia=response;
      }
    })
  }

}
