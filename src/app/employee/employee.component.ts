import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../Service/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  private roles: string[];
  private authority: string;

  constructor(private tokenStorage: TokenStorageService,private router : Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
          if (role === 'ROLE_RM') {
          this.authority = 'rm';
          return true;
        }
        this.authority = 'employee';
        return true;
      });
    }
  }

}