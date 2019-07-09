import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import * as $ from 'jquery';
import { TokenStorageService } from 'src/app/Service/token-storage.service';


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  info: { token: string; username: string; authorities: string[]; };

  constructor(private token: TokenStorageService, private fb: FormBuilder, private _authService: AuthenticationService) { }

  EditUser = this.fb.group({ firstName: [''], lastName: [''], email: [''], password: [''] });

  // tslint:disable-next-line:max-line-length
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };


    let toggle = true;

    const newLocal = $('.sidebar-icon').click(function () {
      if (toggle) {
        $('.page-container').addClass('sidebar-collapsed').removeClass('sidebar-collapsed-back');
        $('#menu span').css({ 'position': 'absolute' });
      } else {
        $('.page-container').removeClass('sidebar-collapsed').addClass('sidebar-collapsed-back');
        setTimeout(function () {
          $('#menu span').css({ 'position': 'relative' });
        }, 400);
      }
      toggle = !toggle;
    });


    $(document).ready(function() {
      const navoffeset = $('.header-main').offset().top;
    $(window).scroll(function() {
      const scrollpos = $(window).scrollTop();
    if (scrollpos >= navoffeset) {
        $('.header-main').addClass('fixed');
    } else {
        $('.header-main').removeClass('fixed');
    }
  });
});

  }

  onSubmit() {
    console.log(this.EditUser.value);
    this._authService.edit(this.EditUser.value)
      .subscribe(
        response => console.log('Success', response),
        error => console.error('Error', error)
      );
  }

  logout() {
    this.token.signOut();
    window.location.href = '/';
  }
}
