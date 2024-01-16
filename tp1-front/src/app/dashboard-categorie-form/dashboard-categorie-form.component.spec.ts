import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCategorieFormComponent } from './dashboard-categorie-form.component';

describe('DashboardCategorieFormComponent', () => {
  let component: DashboardCategorieFormComponent;
  let fixture: ComponentFixture<DashboardCategorieFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardCategorieFormComponent]
    });
    fixture = TestBed.createComponent(DashboardCategorieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
