import { Component, OnInit } from '@angular/core';
import { User } from 'user';
import { Routes, RouterModule, Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { TokenStorageService } from '../Service/token-storage.service';
import { AuthenticationService } from '../Service/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin : boolean;
 // private headers;
  private resp : HttpResponse <any>
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private _authService: AuthenticationService, private router : Router,
    private tokenStorage: TokenStorageService ) { }

  userModel = new User('', '');
  // tslint:disable-next-line:max-line-length
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
  ngOnInit() {
  }

  onSubmit() {
    this._authService.auth(this.userModel)
    .subscribe(
      result => {
    //    if(result && result.accessToken){
        this.tokenStorage.saveToken(result.accessToken);
        this.tokenStorage.saveUsername(result.username);
        this.tokenStorage.saveAuthorities(result.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
//        this.reloadPage();

        this.roles.every(
          role => {
          if (role === 'ROLE_HRM') {
            this.router.navigate(['hrm/home']);
            return false;
          } else {
          this.router.navigate(['employee']);
          return true;
          }
        },
          error => {
            console.log(error);
            this.errorMessage = error.error.message;
            this.isLoginFailed = true;
        }
      );
  //        }
    //       else
    //       this.invalidLogin = true; 
     });

  }
  // reloadPage() {
  //   window.location.reload();
  // }
}
