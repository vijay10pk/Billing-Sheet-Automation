import { Injectable } from '@angular/core';
import { ICentricaDigitalMds } from '../centrica_digital_mds/ICentrica-digital-mds';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { IAddEmployee } from './IAdd-employee';
import { FormControl, FormGroup } from '@angular/Forms';


@Injectable({
    providedIn: 'root'
})
export class CentricaDigitalMdsService {
    private Url = 'api/employees/employee.json';
    editables: any = new FormGroup({
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
        pdToSp: new FormControl(''),
        agreedSps: new FormControl(''),
        allocatedSps: new FormControl(''),
        actualSps: new FormControl(''),
        allocatedRevenue: new FormControl(''),
        forcastedRevenue: new FormControl('')
  });
    //private Url = 'http://localhost:8080/ukb/19/11';
    //private postUrl = 'http://localhost:8080/ukb';
    constructor(private http: HttpClient) {
    }
    getemployees(): Observable<ICentricaDigitalMds[]> {
        return this.http.get<ICentricaDigitalMds[]>(this.Url).pipe(
            tap(data => console.log(JSON.stringify(data))),
            catchError(this.handleError)
        );

    }
    postemployee(add: IAddEmployee): Observable<IAddEmployee[]> {
        return this.http.post<IAddEmployee[]>(this.Url, add).pipe(
            tap(data => console.log('posted data is:' + JSON.stringify(add))),
            catchError(this.handleError)
        );
    }
    updateemployee(editfield: ICentricaDigitalMds): Observable<ICentricaDigitalMds[]> {
        return this.http.put<ICentricaDigitalMds[]>(this.Url, editfield).pipe(
            tap(data => console.log('posted data is:' + JSON.stringify(editfield))),
            catchError(this.handleError)
        );
    }

    selectedValue(employee: any, event: any) {
        this.editables.setValue(employee);
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occured: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}
