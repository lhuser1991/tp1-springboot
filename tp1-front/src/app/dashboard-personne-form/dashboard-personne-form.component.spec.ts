import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPersonneFormComponent } from './dashboard-personne-form.component';

describe('DashboardPersonneFormComponent', () => {
  let component: DashboardPersonneFormComponent;
  let fixture: ComponentFixture<DashboardPersonneFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardPersonneFormComponent]
    });
    fixture = TestBed.createComponent(DashboardPersonneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
