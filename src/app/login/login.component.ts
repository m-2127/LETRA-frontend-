import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { User } from 'user';
import { Routes, RouterModule, Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { TokenStorageService } from '../Service/token-storage.service';


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
  constructor(private _authService: AuthService, private router : Router,
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
        if(result && result.accessToken){
        this.tokenStorage.saveToken(result.accessToken);
        this.tokenStorage.saveUsername(result.username);
        this.tokenStorage.saveAuthorities(result.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();

        this.roles.every(role => {
          if (role === 'ROLE_HRM') {
            this.router.navigate(['hrm']);
            return false;
          } 
          // else if (role === 'ROLE_RM') {
          //   this.router.navigate(['rm']);
          //   return false;
          //}
          else 
          this.router.navigate(['employee']);
  
          return true;
        });

          // localStorage.setItem('token', result.accessToken);
          // this.router.navigate(['/']);
          // return true;
          }
          else
          this.invalidLogin = true; 
    }); 
    //       return false;
    //     if (result)
    //     this.router.navigate(['/']);
    //   else  
    //     this.invalidLogin = true; 
    // });
        //console.log('Success !', resp);
        
      //   const keys = resp.headers.keys();
      //  this.headers = keys.map(key =>
      //   `${key}: ${resp.headers.get(key)}`);
      //   console.log(this.headers);

      // },
      // error => console.error('Error Found', error)
  //  );
  }
}
