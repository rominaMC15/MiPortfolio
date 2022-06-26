import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { EditServiceService } from 'src/app/servicios/edit-service.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacionList:any;
  edit:boolean=false;

  constructor(private datosPortfolio:PortfolioService, public editServiceService:EditServiceService) { }

  public educacion : Educacion[] = [];
  public editDatos : Educacion | undefined;

  ngOnInit(): void {
    // this.datosPortfolio.obtenerDatos().subscribe(data=>{
    //   this.educacionList=data.educacion;
    // })

    this.getDatosEducacion();
  }

  Editar(){
    this.edit=!this.edit;
  }

  public getDatosEducacion():void{
    this.datosPortfolio.getDatosEducacion().subscribe({
      next: (response: Educacion[]) =>{
        this.educacion=response;
      }
    })
  }

}
