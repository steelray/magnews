import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftTopbarItemComponent } from './left-topbar-item.component';

describe('LeftTopbarItemComponent', () => {
  let component: LeftTopbarItemComponent;
  let fixture: ComponentFixture<LeftTopbarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftTopbarItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftTopbarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
