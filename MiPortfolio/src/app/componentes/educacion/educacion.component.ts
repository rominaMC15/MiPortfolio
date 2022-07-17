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
  temporalElim:Educacion={"id":0,"lugar":"","titulo":"","img":"","comienzo":"","fin":""}
  temporalAg:Educacion={"lugar":"","titulo":"","img":"","comienzo":"","fin":""}

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

  Agregar(dato:Educacion){
    this.edit=!this.edit;
    this.temporal=this.temporalAg;
  }

  onAgregar(temporalAg:Educacion){
    this.temporal=temporalAg;
    this.datosPortfolio.agregarDatosEdu(this.temporalAg).subscribe({
      next: (response:Educacion) => {
        alert("Sus datos han sido agregados correctamente!")
        this.ngOnInit();
      }
    })
  }

  // Borrar(dato:Educacion){
  //   this.temporal=dato;
  // }

  onBorrar(id:Educacion){
    this.temporalElim=id;
    this.datosPortfolio.borrarEdu(this.temporalElim).subscribe({
      next: (response:Educacion) => {
        alert("Dato eliminado exitosamente!")
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
