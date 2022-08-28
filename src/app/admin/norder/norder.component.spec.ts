import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorderComponent } from './norder.component';

describe('NorderComponent', () => {
  let component: NorderComponent;
  let fixture: ComponentFixture<NorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
