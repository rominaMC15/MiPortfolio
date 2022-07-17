import { Component, OnInit, Input} from '@angular/core';
import { EditServiceService } from 'src/app/servicios/edit-service.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  editIcon:boolean =true;
  constructor( public editServiceService:EditServiceService) { }

  ngOnInit(): void {
    this.editIcon = this.editServiceService.valorIcon;
  }
  onEdit(){
    // console.log("editando");
  }
  onDelete(valQuien:string){
    // console.log("borrando");
  }

  onToggle(){
    this.editIcon = this.editServiceService.valorIcon;
  }

}
