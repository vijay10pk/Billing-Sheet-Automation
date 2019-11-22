import { Component, OnInit } from '@angular/core';
import { ICentricaDigitalMds } from './ICentrica-digital-mds';
import { CentricaDigitalMdsService } from './centrica-digita-mds.service';

@Component({
    selector: 'app-cdm-root',
    templateUrl: './centrica-digital-mds.component.html',
    styleUrls: ['./centrica-digital-mds.component.css']
})

export class CentricaDigitalMdsComponent implements OnInit {

    cardTitle = 'Centrica Digital MDS';
    errorMessage: any;
    // tslint:disable-next-line: variable-name
    _listFilter: string;
    filteredEmployees: ICentricaDigitalMds[];
    employees: ICentricaDigitalMds[] = [

    ];

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
