import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtResponse } from './jwt-response';
import { Observable } from 'rxjs';
import { User } from 'user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }


  auth(user: User):Observable<JwtResponse>{
    return this.http.post<JwtResponse>('http://localhost:8090/api/auth/signin', user,httpOptions);
  }

  apply(data) {
    return this.http.post<any>('http://localhost:8090/api/employee/applyleave', data);
  }
}
