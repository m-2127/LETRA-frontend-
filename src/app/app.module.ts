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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    HrmComponent,
    RmComponent,
    LeaveformComponent
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
      }

    ])
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
