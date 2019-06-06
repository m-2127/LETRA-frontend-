import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-allocateemployee',
  templateUrl: './allocateemployee.component.html',
  styleUrls: ['./allocateemployee.component.css']
})
export class AllocateemployeeComponent implements OnInit {

  public allocateEmployeeForm: FormGroup;
  public employeeList: FormArray;

  get employeelist() {
    return this.allocateEmployeeForm.get('lists') as FormArray;
  }

  addemployee() {
    this.employeeList.push(this.createlist());
  }
  
  constructor( private fb: FormBuilder ) {}


  createlist(): FormGroup{
    return this.fb.group({
      projectId: [null, Validators.compose([Validators.required])],
      taskId: [null, Validators.compose([Validators.required])],
      employeeId: [null, Validators.compose([Validators.required])],
      rmId: [null, Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
    this.allocateEmployeeForm = this.fb.group({
      lists: this.fb.array([this.createlist()])
    });

    this.employeeList = this.allocateEmployeeForm.get('lists') as FormArray;
  
  }

  
  removeList(index) {
    this.employeeList.removeAt(index);
  }

  getTasksFormGroup(index): FormGroup {
    const formGroup = this.employeeList.controls[index] as FormGroup;
    return formGroup;
  }


  submit() {
    console.log(this.allocateEmployeeForm.value);
  }


}
