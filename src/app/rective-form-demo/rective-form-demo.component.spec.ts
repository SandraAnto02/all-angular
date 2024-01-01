import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectiveFormDemoComponent } from './rective-form-demo.component';

describe('RectiveFormDemoComponent', () => {
  let component: RectiveFormDemoComponent;
  let fixture: ComponentFixture<RectiveFormDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RectiveFormDemoComponent]
    });
    fixture = TestBed.createComponent(RectiveFormDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
