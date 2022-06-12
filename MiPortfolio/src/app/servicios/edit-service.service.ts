import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditServiceService {

  private cambioBtn:boolean = false;
  private subject = new Subject<any>();

  valorIcon:boolean= false;
  editModal:boolean= false;

  constructor() { }

  toggleEdit():void{
    this.cambioBtn = !this.cambioBtn;
    this.subject.next(this.cambioBtn);
  }

  onToggle():Observable<any>{
    return this.subject.asObservable();
  }

}