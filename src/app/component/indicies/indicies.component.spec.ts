import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiciesComponent } from './indicies.component';

describe('IndiciesComponent', () => {
  let component: IndiciesComponent;
  let fixture: ComponentFixture<IndiciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
