import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarOtherComponent } from './navbar-other.component';

describe('NavbarOtherComponent', () => {
  let component: NavbarOtherComponent;
  let fixture: ComponentFixture<NavbarOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarOtherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
