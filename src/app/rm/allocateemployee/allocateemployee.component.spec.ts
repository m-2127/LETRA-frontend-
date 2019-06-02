import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateemployeeComponent } from './allocateemployee.component';

describe('AllocateemployeeComponent', () => {
  let component: AllocateemployeeComponent;
  let fixture: ComponentFixture<AllocateemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocateemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocateemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
