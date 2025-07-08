import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {
  public vehicleForm:FormGroup=new FormGroup({
    Vehicle:new FormControl(),
     cost:new FormControl(),
      fuel:new FormControl(),
       model:new FormControl(),
        type:new FormControl(),
         tyres:new FormControl(),
          manufacturer:new FormControl(),
           image:new FormControl(),
  })
    id:number=0;
  constructor( private _activatedRoute:ActivatedRoute,  private _VehiclesService:VehiclesService,private _router:Router){
  
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
      }
    )
    if(this.id){
      _VehiclesService.getVehicle(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicleForm.patchValue(data);
      },(err:any)=>{
        alert("internal service error")
      }
    )
    }
  }
  submit(){
    if (this.id) {
      this._VehiclesService.updateVehicle(this.id, this.vehicleForm.value).subscribe(
        (data:any)=>{
          alert("vehicle record successfully updated");
          this._router.navigateByUrl("/dashboard/vehicles");

        },(err:any)=>{
          alert("internal service error")
        }
      )
      
    } else {
      console.log(this.vehicleForm.value);
    this._VehiclesService.createVehicle(this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert("vehicle record add sucess full")
       this._router.navigateByUrl("/dashboard/vehicles")
      },(err:any)=>{
        alert("internal server error")

      }
    )
      
    }
  }

}
