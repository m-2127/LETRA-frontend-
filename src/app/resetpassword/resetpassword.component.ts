import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { PasswordInfo } from '../Service/password-info';
import { ResetPswdEmailService } from '../Service/reset-pswd-email.service';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  resetform : FormGroup;
  password : FormControl;
  confirmpassword : FormControl;
  token : string;
  passwordModel = new PasswordInfo('', '');

  constructor(private resetpassemailservice : ResetPswdEmailService) {
    let url = new URL(window.location.href);
    this.passwordModel.token = url.searchParams.get("token");
   }



  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls(){
      this.password = new FormControl('',
      [Validators.required,
        Validators.minLength(6)
      ]);
      this.confirmpassword = new FormControl('',
      [Validators.required,
        Validators.minLength(6)
      ]);
     }

  createForm(){
    this.resetform = new FormGroup({
      password : this.password,
      confirmpassword : this.confirmpassword,
    });
  }
 
      
      onSubmit(){
        if(this.password.value==this.confirmpassword.value){
        this.passwordModel.password=this.password.value;
       this.resetpassemailservice.resetpassword(this.passwordModel)
       .subscribe(result => {
         console.log(result);
       });
      }
      else 
      console.log("invalid pass");
      }
    
  }


