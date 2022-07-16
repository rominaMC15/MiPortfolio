import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AcercaDe } from '../models/acerca-de.model';
import { Educacion } from '../models/educacion';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { 
    
  }

  obtenerDatos():Observable<any>{
    return this.http.get('./assets/data/data.json');
    }

  // public getDatos():Observable<AcercaDe>{
  //   return this.http.get<AcercaDe>(this.apiServerUrl + '/persona/ver');
  // }

  //VER DATOS
  public getDatos():Observable<any>{
    return this.http.get(`${this.apiServerUrl}/persona/ver`);
  }

  getDatosExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(`${this.apiServerUrl}/experiencia/ver`);
  }

  getDatosEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(`${this.apiServerUrl}/educacion/ver`);
  }


  //ACTUALIZAR DATOS
  public actualizarDatos(acercaDe: AcercaDe):Observable<AcercaDe>{
    return this.http.put<AcercaDe>(`${this.apiServerUrl}/persona/update`,acercaDe);
  }

  //AGREGAR DATOS
  
    
  }

