import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgsFiltersComponent } from './imgs-filters.component';

describe('ImgsFiltersComponent', () => {
  let component: ImgsFiltersComponent;
  let fixture: ComponentFixture<ImgsFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgsFiltersComponent]
    });
    fixture = TestBed.createComponent(ImgsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
