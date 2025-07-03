import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  vehicles:any[]=[]

  constructor(private _vehiclesServices:VehiclesService){
    this.loadVehicles()
   
  }
  loadVehicles(){
     this._vehiclesServices.getVehicles().subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
        console.log(this.vehicles)
      },(err:any)=>{
        alert("internal server error")
      }
    )
  }
  delete(id:any){
    if(confirm("Are you sure to delete")==true){
      this._vehiclesServices.deleteVehicle(id).subscribe(
        
      (data:any)=>{
        alert("Record deleted successfully");
        this.loadVehicles()
      },(err:any)=>{
        alert("you have cancelled")
      }
    )
      
    }
  }

  term:string=''; 
  search(){
    this._vehiclesServices.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
      }
    )

  }


}

