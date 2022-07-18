import { Component, OnInit, Input} from '@angular/core';
import { EditServiceService } from 'src/app/servicios/edit-service.service';

@Component({
    selector: 'app-icons-trash',
    templateUrl: './icons-trash.component.html',
    styleUrls: ['./icons-trash.component.css']
  })

  export class IconsTrashComponent implements OnInit {
    editIcon:boolean =true;

    constructor(public editServiceService:EditServiceService) { }

    ngOnInit(): void {
    }


    onDelete(){
    }
    
  }