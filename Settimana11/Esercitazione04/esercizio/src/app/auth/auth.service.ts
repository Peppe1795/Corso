import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap, catchError } from 'rxjs/operators';
import { Data } from './data.inetrface';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    jwtHelper = new JwtHelperService();
    baseURL = environment.baseURL;
    private authSubj = new BehaviorSubject<null | Data>(null);
    utente!: Data;

    user$ = this.authSubj.asObservable();
    timeoutLogout: any;
  constructor(private http: HttpClient, private router: Router) { }

  login(data: { email: string; password: string }) {
    return this.http.post<Data>(`${this.baseURL}login`, data).pipe(
        tap((data) => {
            console.log(data);
            this.authSubj.next(data);
            this.utente = data;
            console.log(this.utente);
            localStorage.setItem('user', JSON.stringify(data));
        }),
        catchError(this.errors)
    );
}
signup(data: {
    nome: string;
    cognome: string;
    email: string;
    password: string;
}) {
    return this.http.post(`${this.baseURL}register`, data);
}
logout() {
    this.authSubj.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/']);
    if (this.timeoutLogout) {
        clearTimeout(this.timeoutLogout);
    }
}
private errors(err: any) {
    switch (err.error) {
        case 'Email already exists':
            return throwError('Utente già presente');
            break;

        case 'Email format is invalid':
            return throwError('Formato mail non valido');
            break;

        default:
            return throwError('Errore nella chiamata');
            break;
    }
}

}
