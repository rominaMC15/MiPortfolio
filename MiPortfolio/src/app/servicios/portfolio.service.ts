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
  // apiServerUrl = environment.apiBaseUrl;
  apiServerUrl:string='https://negative-loralyn-crazyro15.koyeb.app/';

  constructor(private http:HttpClient) { 
    
  }

  obtenerDatos():Observable<any>{
    return this.http.get('./assets/data/data.json');
    }

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

  public actualizarDatosEdu(dato:any):Observable<Educacion>{
    return this.http.put<Educacion>(`${this.apiServerUrl}/educacion/update`,dato);
  }

  public actualizarDatosExp(dato:any):Observable<Experiencia>{
    return this.http.put<Experiencia>(`${this.apiServerUrl}/experiencia/update`,dato);
  }

  //AGREGAR DATOS
  public agregarDatosEdu(dato:any):Observable<Educacion>{
    return this.http.post<Educacion>(`${this.apiServerUrl}/educacion/new`,dato);
  }

  public agregarDatosExp(dato:any):Observable<Experiencia>{
    return this.http.post<Experiencia>(`${this.apiServerUrl}/experiencia/new`,dato);
  }

  //BORRAR DATOS
  public borrarEdu(dato:any):Observable<Educacion>{
    return this.http.delete<Educacion>(`${this.apiServerUrl}/educacion/delete/${dato.id}`);
  }

  public borrarExp(dato:any):Observable<Experiencia>{
    return this.http.delete<Experiencia>(`${this.apiServerUrl}/experiencia/delete/${dato.id}`)
  }
  
    
  }

