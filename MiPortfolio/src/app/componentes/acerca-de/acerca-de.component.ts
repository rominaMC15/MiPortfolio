import { Component, OnInit } from '@angular/core';
import { FaLayersTextComponent } from '@fortawesome/angular-fontawesome';
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

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio=data;
    });
  };

  Editar(){
    this.edit=!this.edit;
    
  }

}

