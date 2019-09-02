import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNewsComponent } from './top-news.component';

@NgModule({
  declarations: [TopNewsComponent],
  imports: [CommonModule],
  exports: [TopNewsComponent]
})
export class TopNewsModule {}
