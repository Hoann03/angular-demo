import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoHocsinhComponent } from './demo-hocsinh.component';

describe('DemoHocsinhComponent', () => {
  let component: DemoHocsinhComponent;
  let fixture: ComponentFixture<DemoHocsinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoHocsinhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoHocsinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
