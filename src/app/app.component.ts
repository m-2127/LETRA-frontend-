import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './Service/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // private roles: string[];
  // private authority: string;
     constructor(){}
  // constructor(private tokenStorage: TokenStorageService,private router : Router) { }
     ngOnInit(){}
  // ngOnInit() {
  //   if (this.tokenStorage.getToken()) {
  //     this.roles = this.tokenStorage.getAuthorities();
  
  //     this.roles.every(role => {
  //       if (role === 'ROLE_HRM') {
  //         this.authority = 'hrm';
  //         return false;
  //       } else if (role === 'ROLE_RM') {
  //         this.authority = 'rm';
  //         return false;
  //       }
  //       this.authority = 'employee';
  //       this.router.navigate(['/employee']);

  //       return true;
  //     });
  //   }
  // }
}
