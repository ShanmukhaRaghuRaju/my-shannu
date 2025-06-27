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
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { DirectivesComponent } from './directives/directives.component';

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
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
