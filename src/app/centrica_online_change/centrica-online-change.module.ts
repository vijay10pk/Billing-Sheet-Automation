import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentricaOnlineChangeComponent } from './centrica-online-change.component';
import { FormsModule, ReactiveFormsModule } from '@angular/Forms';



@NgModule({
  declarations: [
    CentricaOnlineChangeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CentricaOnlineChangeModule { }
