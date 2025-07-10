import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ClockComponent } from './clock/clock.component';
import { ClaculatorComponent } from './claculator/claculator.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { DirectivesComponent } from './directives/directives.component';
import { TableComponent } from './table/table.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HttpClientModule } from '@angular/common/http';
import { AmazonComponent } from './amazon/amazon.component';
import { EmailsComponent } from './emails/emails.component';
import { CardsComponent } from './cards/cards.component';
import { WeatherComponent } from './weather/weather.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { IdcardsComponent } from './idcards/idcards.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { IdcardDetailsComponent } from './idcard-details/idcard-details.component';
import { RegistrationComponent } from './registration/registration.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Sibiling1Component } from './sibiling1/sibiling1.component';
import { Sibiling2Component } from './sibiling2/sibiling2.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    ErrorComponent,
    ClockComponent,
    ClaculatorComponent,
    EventBindingComponent,
    LoginPageComponent,
    DirectivesComponent,
    TableComponent,
    FlipkartComponent,
    VehiclesComponent,
    AmazonComponent,
    EmailsComponent,
    CardsComponent,
    WeatherComponent,
    CreateVehicleComponent,
    IdcardsComponent,
    CreateStudentComponent,
    VehicleDetailsComponent,
    IdcardDetailsComponent,
    RegistrationComponent,
    ParentComponent,
    ChildComponent,
    Sibiling1Component,
    Sibiling2Component,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
