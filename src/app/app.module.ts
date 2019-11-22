import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/Forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CentricaDigitalMdsComponent } from 'src/app/centrica_digital_mds/centrica-digital-mds.component';
import { AddEmployeeComponent } from './shared/add-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    CentricaDigitalMdsComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
