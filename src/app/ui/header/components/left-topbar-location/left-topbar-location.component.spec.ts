import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftTopbarLocationComponent } from './left-topbar-location.component';

describe('LeftTopbarLocationComponent', () => {
  let component: LeftTopbarLocationComponent;
  let fixture: ComponentFixture<LeftTopbarLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftTopbarLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftTopbarLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
