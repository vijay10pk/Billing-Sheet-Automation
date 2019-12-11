import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/Forms';
import { CentricaDigitalMdsComponent } from './centrica-digital-mds.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CentricaDigitalMdsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CentricaDigitalMdsModule { }
