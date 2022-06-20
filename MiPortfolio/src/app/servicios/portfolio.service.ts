import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AcercaDe } from '../models/acerca-de.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get('./assets/data/data.json');
    }

  public getDatos():Observable<AcercaDe>{
    return this.http.get<AcercaDe>(`${this.apiServerUrl}/persona/ver`);
  }

  public actualizarDatos(acercaDe: AcercaDe):Observable<AcercaDe>{
    return this.http.put<AcercaDe>(`${this.apiServerUrl}/persona/update`,acercaDe);
  }
    
  }

