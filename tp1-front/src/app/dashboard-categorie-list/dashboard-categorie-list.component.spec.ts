import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCategorieListComponent } from './dashboard-categorie-list.component';

describe('DashboardCategorieListComponent', () => {
  let component: DashboardCategorieListComponent;
  let fixture: ComponentFixture<DashboardCategorieListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardCategorieListComponent]
    });
    fixture = TestBed.createComponent(DashboardCategorieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
