import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponentsComponent } from './auth-components.component';

describe('AuthComponentsComponent', () => {
  let component: AuthComponentsComponent;
  let fixture: ComponentFixture<AuthComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
