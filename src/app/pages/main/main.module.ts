import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { LayoutModule } from 'src/app/ui/layout/layout.module';
import { ContentHeaderModule } from 'src/app/ui/content-header/content-header.module';
import { TopNewsModule } from 'src/app/ui/top-news/top-news.module';
import { CategoriesPostsComponent } from './components/categories-posts/categories-posts.component';
import { MostPopularModule } from 'src/app/ui/most-popular/most-popular.module';
import { PostCardModule } from 'src/app/ui/post-card/post-card.module';
import { VideoPostCardModule } from 'src/app/ui/video-post-card/video-post-card.module';
import { SubscribeFormModule } from 'src/app/ui/subscribe-form/subscribe-form.module';
import { TagsModule } from 'src/app/ui/tags/tags.module';
import { StayConnectedModule } from 'src/app/ui/stay-connected/stay-connected.module';

@NgModule({
  declarations: [MainComponent, CategoriesPostsComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    LayoutModule,
    ContentHeaderModule,
    TopNewsModule,
    MostPopularModule,
    PostCardModule,
    VideoPostCardModule,
    SubscribeFormModule,
    TagsModule,
    StayConnectedModule
  ]
})
export class MainModule {}
