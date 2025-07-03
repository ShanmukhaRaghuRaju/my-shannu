import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ClockComponent } from './clock/clock.component';
import { ClaculatorComponent } from './claculator/claculator.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { discardPeriodicTasks } from '@angular/core/testing';
import { DirectivesComponent } from './directives/directives.component';
import { TableComponent } from './table/table.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { AmazonComponent } from './amazon/amazon.component';
import { EmailsComponent } from './emails/emails.component';
import { CardsComponent } from './cards/cards.component';
import { WeatherComponent } from './weather/weather.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { IdcardsComponent } from './idcards/idcards.component';

const routes: Routes = [
 
    {path:'dashboard',component:DashboardComponent,children:[
    {path:'clock',component:ClockComponent},
    {path:'calculator',component:ClaculatorComponent},
    {path:'event',component:EventBindingComponent},
    {path:'login-page',component:LoginPageComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'table',component:TableComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'vehicles',component:VehiclesComponent},
    {path:'amazon',component:AmazonComponent},
    {path:'email',component:EmailsComponent},
    {path:'card',component:CardsComponent},
    {path:'weather',component:WeatherComponent},
    {path:'createvehicle',component:CreateVehicleComponent},
    {path:'idcards',component:IdcardsComponent},

    
  ]},
  {path:'home',component:HomeComponent},
  {path:'**',component:ErrorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
