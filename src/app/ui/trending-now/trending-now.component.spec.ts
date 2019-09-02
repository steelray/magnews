import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingNowComponent } from './trending-now.component';

describe('TrendingNowComponent', () => {
  let component: TrendingNowComponent;
  let fixture: ComponentFixture<TrendingNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
