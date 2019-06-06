import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/Service/authentication.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  public ProjectDetailsForm: FormGroup;
  public taskList: FormArray;

  get taskFormGroup() {
    return this.ProjectDetailsForm.get('tasks') as FormArray;
  }

  constructor(private fb: FormBuilder, private _authService: AuthenticationService) { }

   ngOnInit() {
    this.ProjectDetailsForm = this.fb.group({
      name: [null, Validators.compose([Validators.required])],
      startDate: [''],
      endDate: [''],
      tasks: this.fb.array([this.createTasks()])
    });

    this.taskList = this.ProjectDetailsForm.get('tasks') as FormArray;
  }

  createTasks(): FormGroup {
    return this.fb.group({
      taskName: [null, Validators.compose([Validators.required])],
      taskStartDate: ['date', Validators.compose([Validators.required])],
      taskEndDate: ['date', Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required])]
      });
  }

  addTask() {
    this.taskList.push(this.createTasks());
  }

  removeTask(index) {
    this.taskList.removeAt(index);
  }

  getTasksFormGroup(index): FormGroup {
    const formGroup = this.taskList.controls[index] as FormGroup;
    return formGroup;
  }

    submit() {
      console.log(this.ProjectDetailsForm.value);
      this._authService.details(this.ProjectDetailsForm.value)
        .subscribe(
          response => console.log('Success', response),
          error => console.error('Error', error)
        );
  }

}
