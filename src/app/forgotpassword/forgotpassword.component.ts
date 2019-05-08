import { Component, OnInit } from '@angular/core';
import { ResetPswdEmailService } from '../Service/reset-pswd-email.service';
import { EmailInfo } from '../Service/email-info';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private resetpswdemailservice : ResetPswdEmailService) {
   }

  emailinfo = new EmailInfo('');
  mail : string;

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  ngOnInit() {
  }

  onSubmit() {
    this.resetpswdemailservice.sendemail(this.emailinfo)
    .subscribe(result =>{
    console.log(result);
    });
   
  }

}
