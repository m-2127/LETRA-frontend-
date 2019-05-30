import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/Service/authentication.service';
@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.css']
})
export class ManageusersComponent implements OnInit {

  constructor(private fb:FormBuilder, private _authService: AuthenticationService) { }

  ManageUsersForm = this.fb.group({name: [''], email: [''], mobilenumber: [''], password: [''], gender: ['']});

  ngOnInit() {
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
    console.log(this.ManageUsersForm.value);
    this._authService.manage(this.ManageUsersForm.value)
      .subscribe(
        response => console.log('Success', response),
        error => console.error('Error', error)
      );
  }

}
