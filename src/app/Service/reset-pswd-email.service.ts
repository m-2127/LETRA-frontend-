import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailInfo } from './email-info';

@Injectable({
  providedIn: 'root'
})
export class ResetPswdEmailService {

  constructor(private http: HttpClient) { }

  pswdreset( emailinfo : EmailInfo){
    return this.http.post<any>('http://localhost:8090/api/auth/forgot',  emailinfo);
  }
}
