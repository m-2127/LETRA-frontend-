import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { EmailInfo } from './email-info';
import { PasswordInfo } from './password-info';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ResetPswdEmailService {

  constructor(private http: HttpClient) { }

  sendemail( emailinfo : EmailInfo){
    // let params = new HttpParams();
    // params = params.append('email', emailinfo);
    // console.log(params);
    // return this.http.post<any>('http://localhost:8090/api/auth/forgot', { params: params });

      return this.http.post<any>('http://localhost:8090/api/auth/forgot', emailinfo,httpOptions);
  }

  resetpassword(passwordinfo : PasswordInfo){
    console.log()
    return this.http.post<any>('http://localhost:8090/api/auth/reset',  passwordinfo ,httpOptions );
  }


}   
