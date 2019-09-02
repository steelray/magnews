import { NgModule } from '@angular/core';
import { MenuTabDirective } from './menu-tab.directive';

@NgModule({
  declarations: [MenuTabDirective],
  exports: [MenuTabDirective]
})
export class MenuTabDirectiveModule {}
