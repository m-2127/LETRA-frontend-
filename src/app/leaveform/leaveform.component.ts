
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { AuthenticationService } from '../Service/authentication.service';


@Component({
  selector: 'app-leaveform',
  templateUrl: './leaveform.component.html',
  styleUrls: ['./leaveform.component.css']
})
export class LeaveformComponent implements OnInit {


  ngOnInit() {
  }

  get employeeid() {
    return this.LeaveRequestForm.get('employeeID');
  }

  show: boolean = false;

  constructor(private fb: FormBuilder, private _authService: AuthenticationService) { }

  LeaveRequestForm = this.fb.group({ employeeID: ['', Validators.required],
    leave: [''],
    setdate: [''],
    finishDate: ['']
  });



  onSubmit() {
    console.log(this.LeaveRequestForm.value);
    this._authService.apply(this.LeaveRequestForm.value)
      .subscribe(
        response => console.log('Success', response),
        error => console.error('Error', error)
      );
  }


}

