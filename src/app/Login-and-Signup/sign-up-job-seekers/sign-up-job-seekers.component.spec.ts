import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpJobSeekersComponent } from './sign-up-job-seekers.component';

describe('SignUpJobSeekersComponent', () => {
  let component: SignUpJobSeekersComponent;
  let fixture: ComponentFixture<SignUpJobSeekersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpJobSeekersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpJobSeekersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
