import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaList:any;
  edit:boolean=false;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    // this.datosPortfolio.obtenerDatos().subscribe(data=>{
    //   this.experienciaList=data.experiencia;
    // })
  }

  Editar(){
    this.edit=!this.edit;
  }

}
