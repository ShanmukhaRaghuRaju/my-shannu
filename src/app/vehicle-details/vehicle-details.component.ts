import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {
  id:number=0;
  vehicle:any={}

  constructor(private _activatedRoute:ActivatedRoute, private _vehiclesServices:VehiclesService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;

      },(err:any)=>{
        alert("unable to get id")
      }
    )

    _vehiclesServices.getVehicle(this.id).subscribe(
       (data:any)=>{
        console.log(data);
       this.vehicle=data

      },(err:any)=>{
        alert("internal sever error")
      }

    )
  }


  

}
