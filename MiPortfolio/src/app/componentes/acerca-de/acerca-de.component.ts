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

  constructor(private datosPortfolio:PortfolioService, public editServiceService:EditServiceService) { }

    public acercaDe : AcercaDe | undefined;
    public editDatos : AcercaDe | undefined;

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
    
  

}

