import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/Forms';
import { CentricaDigitalMdsService } from '../centrica_digital_mds/centrica-digita-mds.service';


@Component ({
    selector: 'app-add',
    templateUrl: './add-employee.component.html'
})
export class AddEmployeeComponent {
    newEmployees = new FormGroup({
        projectIdName: new FormControl(''),
        employeeId: new FormControl(''),
        workId: new FormControl(''),
        teamMember: new FormControl(''),
        comments: new FormControl(''),
        sow: new FormControl(''),
        location: new FormControl(''),
        stream: new FormControl(''),
        project: new FormControl(''),
        cat: new FormControl(''),
        workingDay: new FormControl(''),
        agreedSps: new FormControl('')
      });
    errorMessage: any;
      constructor(private cdmService: CentricaDigitalMdsService) {
    }
      onSubmit() {
          this.cdmService.postemployee(this.newEmployees.getRawValue()).subscribe({
            next: res => {
                this.cdmService.getemployees();
            },
            error: err => this.errorMessage = err
          });
      }
}
