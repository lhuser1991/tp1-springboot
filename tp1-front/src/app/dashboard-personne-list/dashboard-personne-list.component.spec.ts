import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPersonneListComponent } from './dashboard-personne-list.component';

describe('DashboardPersonneListComponent', () => {
  let component: DashboardPersonneListComponent;
  let fixture: ComponentFixture<DashboardPersonneListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardPersonneListComponent]
    });
    fixture = TestBed.createComponent(DashboardPersonneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
