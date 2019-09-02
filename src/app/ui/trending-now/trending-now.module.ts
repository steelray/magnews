import { NgModule } from '@angular/core';
import { TrendingNowComponent } from './trending-now.component';
import { SlideTextDirectiveModule } from 'src/app/core/directives/slide-text/slide-text-directive.module';

@NgModule({
  declarations: [TrendingNowComponent],
  imports: [SlideTextDirectiveModule],
  exports: [TrendingNowComponent]
})
export class TrendingNowModule {}
