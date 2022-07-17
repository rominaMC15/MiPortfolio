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

  temporal:Educacion={"id":0,"lugar":"","titulo":"","img":"","comienzo":"","fin":""}

  ngOnInit(): void {
    // this.datosPortfolio.obtenerDatos().subscribe(data=>{
    //   this.educacionList=data.educacion;
    // })

    this.getDatosEducacion();
  }

  Editar(dato:Educacion){
    this.edit=!this.edit;
    this.temporal=dato;
  }

  onEditar(){
    this.datosPortfolio.actualizarDatosEdu(this.temporal).subscribe({
      next: (response:Educacion) => {
        alert("Sus datos han sido modificados!")
        this.ngOnInit();
      }
    })
  }
  

  public getDatosEducacion():void{
    this.datosPortfolio.getDatosEducacion().subscribe({
      next: (response: Educacion[]) =>{
        this.educacion=response;
      }
    })
  }

}
