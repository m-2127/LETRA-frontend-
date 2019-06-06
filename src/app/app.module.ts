import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HrmComponent } from './hrm/hrm.component';
import { RmComponent } from './rm/rm.component';
import { httpInterceptorProviders } from './Service/auth-interceptor';
import { LeaveformComponent} from './leaveform/leaveform.component';
import { EmployeeComponent  } from './employee/employee.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { HomeComponent } from './hrm/home/home.component';
import { ManageusersComponent } from './hrm/manageusers/manageusers.component';
import { ManageleavesComponent } from './hrm/manageleaves/manageleaves.component';
import { ApplyleaveComponent } from './hrm/applyleave/applyleave.component';
import { MyleavesComponent } from './hrm/myleaves/myleaves.component';
import { ChangepasswordComponent } from './hrm/changepassword/changepassword.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { EdituserComponent } from './hrm/edituser/edituser.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ProjectDetailsComponent } from './rm/project-details/project-details.component';
import { AllocateemployeeComponent } from './rm/allocateemployee/allocateemployee.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    HrmComponent,
    RmComponent,
    LeaveformComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    HomeComponent,
    ManageusersComponent,
    ManageleavesComponent,
    ApplyleaveComponent,
    MyleavesComponent,
    ChangepasswordComponent,
    EdituserComponent,
    ProjectDetailsComponent,
    AllocateemployeeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
