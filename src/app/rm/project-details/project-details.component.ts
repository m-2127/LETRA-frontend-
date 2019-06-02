import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  get projectName() {
    return this.ProjectDetailsForm.get('projectName');
  }

  get projectTask() {
    return this.ProjectDetailsForm.get('i');
  }

  get tasks() {
    return this.ProjectDetailsForm.get('tasks') as FormArray;
  }

  addTask() {
    this.tasks.push(this.fb.control(''));
  }

  createTasks(): FormGroup{
    return this.fb.group({
      taskNamei:'',
      taskStarti:'',
      taskEndi:'',
      Descriptioni:''
    })
  }


  constructor(private fb: FormBuilder) { }

  ProjectDetailsForm = this.fb.group({
    projectName: [''],
    startDate: [''],
    endDate: [''],
    tasks: this.fb.array([this.createTasks()])

  });

  ngOnInit() {


    
  }

}
