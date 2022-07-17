import { Component, OnInit } from '@angular/core';
import { EditServiceService } from 'src/app/servicios/edit-service.service';

@Component({
  selector: 'app-icons-add',
  templateUrl: './icons-add.component.html',
  styleUrls: ['./icons-add.component.css']
})
export class IconsAddComponent implements OnInit {
  editIcon:boolean =true;

  constructor(public editServiceService:EditServiceService) { }

  ngOnInit(): void {
  }

  onDelete(){

  }

}
