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
import { HomeComponent } from './hrm/home/home.component';
import { ManageusersComponent } from './hrm/manageusers/manageusers.component';
import { ManageleavesComponent } from './hrm/manageleaves/manageleaves.component';
import { ApplyleaveComponent } from './hrm/applyleave/applyleave.component';
import { MyleavesComponent } from './hrm/myleaves/myleaves.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    HrmComponent,
    RmComponent,
    LeaveformComponent,
    ForgotpasswordComponent,
    HomeComponent,
    ManageusersComponent,
    ManageleavesComponent,
    ApplyleaveComponent,
    MyleavesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'employee',
        component: EmployeeComponent
      },
      {
        path: 'hrm',
        component: HrmComponent
      },
      {
        path: 'employee/rm',
        component: RmComponent
      },
      {
        path: 'employee/leaveform',
        component: LeaveformComponent
      },
      {
        path: 'hrm/home',
        component: HomeComponent
      },
      {
        path: 'hrm/applyleave',
        component: ApplyleaveComponent
      },
      {
        path: 'hrm/manageleaves',
        component: ManageleavesComponent
      },
      {
        path: 'hrm/manageusers',
        component: ManageusersComponent
      },
      {
        path: 'hrm/myleaves',
        component: MyleavesComponent
      }

    ])
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
