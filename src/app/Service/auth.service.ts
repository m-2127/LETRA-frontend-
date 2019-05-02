import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { User } from 'user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtResponse } from './jwt-response';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  //_url = 'http://localhost:8090/login';

  apply_url = 'http://localhost:8090/api/office1'; //api created in the backend

  auth(user: User):Observable<JwtResponse>{
  //  console.log(user);
   // return this.http.post<any>(this._url, { observe : 'response'});
   return this.http.post<JwtResponse>('http://localhost:8090/api/auth/signin', user,httpOptions);
      // JSON.stringify(user)
     
  //      .pipe(
  //     map( (response : Response) => {
  //      // let result:any = response.json();
  //       if(response && response.accessToken){
  //         localStorage.setItem('token', response.accessToken);
  //         return true;
  //       }
  //       else 
  //       return false;
  //     }));
   }
   
  apply(data) {
    return this.http.get<any>(this.apply_url, data);
  }


}
