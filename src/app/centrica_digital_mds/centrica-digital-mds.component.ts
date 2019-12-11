import { Component, OnInit } from '@angular/core';
import { ICentricaDigitalMds } from './ICentrica-digital-mds';
import { EditEmployeeComponent } from '../shared/edit-employee.component';
import { CentricaDigitalMdsService } from '../shared/centrica-digita-mds.service';

@Component({
    templateUrl: './centrica-digital-mds.component.html',
    styleUrls: ['./centrica-digital-mds.component.css']
})

export class CentricaDigitalMdsComponent implements OnInit {

    cardTitle = 'Centrica Digital MDS';
    errorMessage: any;
    // tslint:disable-next-line: variable-name
    _listFilter: string;
    selectedEmployee: any;
    filteredEmployees: ICentricaDigitalMds[];
    employees: ICentricaDigitalMds[] = [

    ];
    editField: any;
    employeeData: any;
    selection: any;

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredEmployees = this.listFilter ? this.performFilter(this.listFilter) : this.employees;
    }

    constructor(private cdmService: CentricaDigitalMdsService) {
        this.listFilter = ' ';
    }

    performFilter(filterBy: string): ICentricaDigitalMds[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.employees.filter((employee: ICentricaDigitalMds) =>
            employee.teamMember.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    changeValue(i: number, property: string, event: any) {
        this.editField = event.target.textContent;
    }

   /*  selectedValue(employee: any, e: any) {
        if (e.target.checked) {
            EditEmployeeComponent.selectedEmployee(employee);
        }
    } */

    updated(i: number, property: string, event: any) {
        const editField = event.target.textContent;
        this.cdmService.updateemployee(this.editField).subscribe({
            next: res => {
                this.cdmService.getemployees();
            },
            error: err => this.errorMessage = err
        });
    }
   /*  selectAll(event) {
        if (event.target.checked) {
            this.employeeData = this.employeeData.map((employee) => {
               employee.selected = true;
               return employee;
            });
        } else {
            this.employeeData = this.employeeData.map((employee) => {
               employee.selected = false;
               return employee;
            });
        }
    }
    makeEditable() {
        this.employeeData = this.employeeData.map((employee) => {
           if (employee.selected) { employee.editable = true; }
           else { employee.editable = false; }
           return employee;
        });
      } */
    ngOnInit(): void {
        this.cdmService.getemployees().subscribe({
            next: employees => {
                this.employees = employees;
                this.filteredEmployees = this.employees;
            },
            error: err => this.errorMessage = err
        });
    }
}
