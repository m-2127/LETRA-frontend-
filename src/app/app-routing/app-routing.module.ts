import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { EmployeeComponent } from '../employee/employee.component';
import { HrmComponent } from '../hrm/hrm.component';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from '../resetpassword/resetpassword.component';
import { RmComponent } from '../rm/rm.component';
import { LeaveformComponent } from '../leaveform/leaveform.component';
import { HomeComponent } from '../hrm/home/home.component';
import { ApplyleaveComponent } from '../hrm/applyleave/applyleave.component';
import { ManageleavesComponent } from '../hrm/manageleaves/manageleaves.component';
import { ManageusersComponent } from '../hrm/manageusers/manageusers.component';
import { MyleavesComponent } from '../hrm/myleaves/myleaves.component';
import { ChangepasswordComponent } from '../hrm/changepassword/changepassword.component';
import { EdituserComponent } from '../hrm/edituser/edituser.component';
import { ProjectDetailsComponent } from '../rm/project-details/project-details.component';
import { AllocateemployeeComponent } from '../rm/allocateemployee/allocateemployee.component';
import { FullcalendarComponent } from 'src/app/fullcalendar/fullcalendar.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path: 'forgot',
    component: ForgotpasswordComponent
  },
  {
    path: 'reset',
    component: ResetpasswordComponent
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
  },
  {
    path: 'hrm/changepassword',
    component: ChangepasswordComponent
  },
  {
    path: 'hrm/edituser',
    component: EdituserComponent
  },
  {
    path: 'rm/projectdetails',
    component: ProjectDetailsComponent
  },
  {
    path: 'rm/allocateemployee',
    component: AllocateemployeeComponent
  },
  { 
    path:'fullcalendar', 
    component: FullcalendarComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
