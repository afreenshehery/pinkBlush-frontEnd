import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashBoard2Component } from './admin-dash-board2.component';

describe('AdminDashBoard2Component', () => {
  let component: AdminDashBoard2Component;
  let fixture: ComponentFixture<AdminDashBoard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashBoard2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashBoard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
