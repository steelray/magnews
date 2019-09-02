import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesPostsComponent } from './categories-posts.component';

describe('CategoriesPostsComponent', () => {
  let component: CategoriesPostsComponent;
  let fixture: ComponentFixture<CategoriesPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
