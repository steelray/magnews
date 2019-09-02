import { NgModule } from '@angular/core';
import { HamburgerDirective } from './hamburger.directive';

@NgModule({
  declarations: [HamburgerDirective],
  exports: [HamburgerDirective]
})
export class HamburgerDirectiveModule {}
