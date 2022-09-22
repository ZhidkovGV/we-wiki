import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockPerformanceComponent } from './mock-performance.component';

describe('MockPerformanceComponent', () => {
  let component: MockPerformanceComponent;
  let fixture: ComponentFixture<MockPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockPerformanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MockPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
