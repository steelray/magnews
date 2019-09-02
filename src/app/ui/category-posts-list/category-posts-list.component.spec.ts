import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPostsListComponent } from './category-posts-list.component';

describe('CategoryPostsListComponent', () => {
  let component: CategoryPostsListComponent;
  let fixture: ComponentFixture<CategoryPostsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryPostsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryPostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
