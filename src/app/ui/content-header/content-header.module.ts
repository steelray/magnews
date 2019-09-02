import { NgModule } from '@angular/core';
import { ContentHeaderComponent } from './content-header.component';
import { SearchBlockModule } from '../search-block/search-block.module';
import { TrendingNowModule } from '../trending-now/trending-now.module';

@NgModule({
  declarations: [ContentHeaderComponent],
  imports: [TrendingNowModule, SearchBlockModule],
  exports: [ContentHeaderComponent]
})
export class ContentHeaderModule {}
