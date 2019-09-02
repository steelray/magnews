import { NgModule } from '@angular/core';
import { CommentsComponent } from './comments.component';

@NgModule({
  declarations: [CommentsComponent],
  exports: [CommentsComponent]
})
export class CommentsModule {}
