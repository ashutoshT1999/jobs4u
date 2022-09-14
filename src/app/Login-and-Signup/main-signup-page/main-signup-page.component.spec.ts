import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSignupPageComponent } from './main-signup-page.component';

describe('MainSignupPageComponent', () => {
  let component: MainSignupPageComponent;
  let fixture: ComponentFixture<MainSignupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSignupPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
