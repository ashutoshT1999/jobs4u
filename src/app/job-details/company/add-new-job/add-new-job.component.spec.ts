import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewJobComponent } from './add-new-job.component';

describe('AddNewJobComponent', () => {
  let component: AddNewJobComponent;
  let fixture: ComponentFixture<AddNewJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
