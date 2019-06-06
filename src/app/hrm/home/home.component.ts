import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { TokenStorageService } from 'src/app/Service/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private token: TokenStorageService) { }

  info: any;

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

  logout() {
    this.token.signOut();
    window.location.reload();
  }

}
