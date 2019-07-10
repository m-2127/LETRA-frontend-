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

  authgoogle(){
    return this.http.get('http://localhost:8090/oauth2/callback/code').subscribe((res)=>{
      console.log(res);
  });
  }

  apply(data) {
    return this.http.post<any>('http://localhost:8090/api/auth/applyleave', data);
  }

  manage(data) {
    return this.http.post<any>('http://localhost:8090/api/auth/registration', data);
  }

  edit(data) {
    return this.http.post<any>('http://localhost:8090/api/auth/edituser', data);
  }

  details(data) {
    return this.http.post<any>('http://localhost:8090/api/rm/addproject', data);
  }

  getDetails() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

}
