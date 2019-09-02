import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPostCardComponent } from './video-post-card.component';

describe('VideoPostCardComponent', () => {
  let component: VideoPostCardComponent;
  let fixture: ComponentFixture<VideoPostCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPostCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
