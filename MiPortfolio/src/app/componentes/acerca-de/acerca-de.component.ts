import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FaLayersTextComponent } from '@fortawesome/angular-fontawesome';
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
    // public editable: AcercaDe | undefined;

  // ngOnInit(): void {

  //   // this.datosPortfolio.obtenerDatos().subscribe(data => {
  //   //   console.log(data);
  //   //   this.miPortfolio=data;
  //   // });

  //   this.getDatos();

  // };

  ngOnInit(): void {
 
    // this.datosPortfolio.obtenerDatos().subscribe(data => {
    //   //console.log(data);
    //   this.miPortfolio=data;
    //   console.log(this.miPortfolio);
    // });
    this.datosPortfolio.getDatos().subscribe(data => {
      this.acercaDe=data[0];
      console.log(this.acercaDe);
    });


    //this.getDatos();

  };

  Editar(){
    this.edit=!this.edit;
  }

  public getDatos():void{
    this.datosPortfolio.getDatos().subscribe({
      next: (response: AcercaDe) =>{
        this.acercaDe=response;
      }
    })
  }

  // public onEditar(acercaDe:AcercaDe){
  //   this.acercaDe = this.editable;
  //   this.miPortfolio.actualizarDatos(acercaDe).subscribe({
  //     next: (response: AcercaDe) => {
  //       console.log(response)
  //       this.getDatos();
  //     }
  //   })
  //}

  onEditar(){
    // if(this.editable.nombre == ""){
    // this.editable.nombre = this.acercaDe.nombre;
    // }else{
    //   this.acercaDe.nombre = this.editable.nombre;
    // }
    // if(this.editable.puesto == ""){ 
    // this.editable.puesto = this.acercaDe.puesto;
    // }else{
    //   this.acercaDe.puesto = this.editable.puesto;
    // }
    // if(this.editable.info == ""){
    // this.editable.info = this.acercaDe.info;
    // }else{
    //   this.acercaDe.info = this.editable.info;
    // }
    // if(this.editable.img == ""){
    // this.editable.img = this.acercaDe.img;
    // }else{
    //   this.acercaDe.img = this.editable.img;
    // }
    this.editable.nombre = this.acercaDe.nombre;
    this.editable.puesto = this.acercaDe.puesto;
    this.editable.info = this.acercaDe.info;
    this.editable.img = this.acercaDe.img;

    this.datosPortfolio.actualizarDatos(this.acercaDe).subscribe({
          next: (response: AcercaDe) => {
            console.log(response)
            this.getDatos();
          }
        })
  }
    
  

}

