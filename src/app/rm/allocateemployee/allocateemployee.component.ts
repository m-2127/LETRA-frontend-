import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-allocateemployee',
  templateUrl: './allocateemployee.component.html',
  styleUrls: ['./allocateemployee.component.css']
})
export class AllocateemployeeComponent implements OnInit {

  get lists() {
    return this.AllocateEmployeeForm.get('tasks') as FormArray;
  }

  addEmployee() {
    this.lists.push(this.fb.control(''));
  }

  createLists(): FormGroup{
    return this.fb.group({
      projectId:'',
      taskId:'',
      employeeId:'',
      rmId:''
    })
  }

  constructor(private fb: FormBuilder) { }

  AllocateEmployeeForm = this.fb.group({
    lists: this.fb.array([this.createLists()])
  })

  ngOnInit() {
  }

}
