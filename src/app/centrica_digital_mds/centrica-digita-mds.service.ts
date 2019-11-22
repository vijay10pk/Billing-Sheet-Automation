import { Injectable } from '@angular/core';
import { ICentricaDigitalMds } from './ICentrica-digital-mds';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { IAddEmployee } from '../shared/IAdd-employee';


@Injectable({
    providedIn: 'root'
})
export class CentricaDigitalMdsService {
    //private Url = 'assets/employees/employee.json';
    private Url = 'http://localhost:8080/ukb/19/11';
    private postUrl = 'http://localhost:8080/ukb';
    constructor(private http: HttpClient) {
    }
    getemployees(): Observable<ICentricaDigitalMds[]> {
        return this.http.get<ICentricaDigitalMds[]>(this.Url).pipe(
            tap(data => console.log(JSON.stringify(data))),
            catchError(this.handleError)
        );

    }
    postemployee(add: IAddEmployee): Observable<IAddEmployee[]> {
        return this.http.post<IAddEmployee[]>(this.postUrl, add).pipe(
            tap(data => console.log('posted data is:' + JSON.stringify(add))),
            catchError(this.handleError)
        );
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
