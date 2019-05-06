import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageleavesComponent } from './manageleaves.component';

describe('ManageleavesComponent', () => {
  let component: ManageleavesComponent;
  let fixture: ComponentFixture<ManageleavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageleavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
