import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/Forms';
import { CentricaDigitalMdsService } from './centrica-digita-mds.service';
import { EditEmployeeComponent } from './edit-employee.component';



@NgModule({
  declarations: [
    AddEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AddEmployeeComponent,
    EditEmployeeComponent
  ]
})
export class SharedModule { }
