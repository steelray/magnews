import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuTabDirectiveModule } from 'src/app/core/directives/menu-tab/menu-tab-directive.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, MenuTabDirectiveModule],
  exports: [MenuComponent]
})
export class MenuModule {}
