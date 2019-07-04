import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { TokenStorageService } from 'src/app/Service/token-storage.service';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import { from, Observable, interval } from 'rxjs';
import * as Stomp from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() details$: Observable<any>;

  greetings: string[] = [];
  disabled = true;
  email: string;
  private stompClient = null;


  constructor(private token: TokenStorageService, private auth: AuthenticationService) { }

  info: any;

  setConnected(connected: boolean) {
    this.disabled = !connected;

    if (connected) {
      this.greetings = [];
    }
  }

  connect() {
    const socket = new SockJS('http://localhost:8080/gkz-stomp-endpoint');
    this.stompClient = Stomp.over(socket);

    const _this = this;
    this.stompClient.connect({}, function (frame) {
      _this.setConnected(true);
      console.log('Connected: ' + frame);

      _this.stompClient.subscribe('/topic/hi', function (hello) {
        _this.showGreeting(JSON.parse(hello.body).greeting);
      });
    });
  }

  disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }

    this.setConnected(false);
    console.log('Disconnected!');
  }

  sendName() {
    this.stompClient.send(
      '/gkz/hello',
      {},
      JSON.stringify({ 'email': this.email })
    );
  }

  showGreeting(message) {
    this.greetings.push(message);
  }


  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

    this.details$ = this.auth.getDetails();

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
    window.location.href = '/';
  }

}
