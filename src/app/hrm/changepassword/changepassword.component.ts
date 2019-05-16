import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor() { }

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

}
