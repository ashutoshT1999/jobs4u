import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginJobSeekersComponent } from './login-job-seekers.component';

describe('LoginJobSeekersComponent', () => {
  let component: LoginJobSeekersComponent;
  let fixture: ComponentFixture<LoginJobSeekersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginJobSeekersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginJobSeekersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
