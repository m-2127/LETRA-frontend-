import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { PasswordValidator } from '../../shared/password.validator';
import { TokenStorageService } from 'src/app/Service/token-storage.service';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  pwRegex = /^([a-zA-Z0-9@*#]{8,15})$/;
  info: { token: string; username: string; authorities: string[]; };
  

  constructor(private token: TokenStorageService, private fb: FormBuilder) { }

  changePasswordForm = this.fb.group({
    currentPassword: ['', Validators.required],
    newPassword: ['password', Validators.required],
    reEnterPassword: ['password', Validators.required]
  }, {validator: PasswordValidator});


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
  }); });
}

  logout() {
    this.token.signOut();
    window.location.href = '/';
  }

}
