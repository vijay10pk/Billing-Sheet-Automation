import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/Forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CentricaDigitalMdsComponent } from 'src/app/centrica_digital_mds/centrica-digital-mds.component';
import { AddEmployeeComponent } from './shared/add-employee.component';
import { HomeComponent } from './centrica_digital_mds/home.component';
import { RouterModule } from '@angular/router';
import { CentricaOnlineChangeModule } from './centrica_online_change/centrica-online-change.module';
import { CentricaOnlineChangeComponent } from './centrica_online_change/centrica-online-change.component';
import { CentricaDigitalMdsUkhFeModule } from './centrica_digital_mds_ukh_fe/centrica-digital-mds-ukh-fe.module';
import { CentricaDigitalMdsUkhFeComponent } from './centrica_digital_mds_ukh_fe/centrica-digital-mds-ukh-fe.component';
import { CentricaDigitalMdsModule } from './centrica_digital_mds/centrica-digital-mds.module';
import { SharedModule } from './shared/shared.module';
import { CentricaDigitalMdsService } from './shared/centrica-digita-mds.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    CentricaOnlineChangeModule,
    CentricaDigitalMdsUkhFeModule,
    CentricaDigitalMdsModule,
    RouterModule.forRoot([
      {path: 'centrica_online_change', component: CentricaOnlineChangeComponent},
      {path: 'centrica_digital_mds', component: CentricaDigitalMdsComponent},
      {path: 'centrica_digital_mds_ukh_fe', component: CentricaDigitalMdsUkhFeComponent},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [CentricaDigitalMdsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
