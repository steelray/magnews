import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LeftTopbarItemComponent } from './components/left-topbar-item/left-topbar-item.component';
import { LeftTopbarLocationComponent } from './components/left-topbar-location/left-topbar-location.component';
import { SocialNetworksModule } from '../social-networks/social-networks.module';
import { MenuModule } from '../menu/menu.module';
import { HamburgerDirectiveModule } from 'src/app/core/directives/hamburger/hamburger-directive.module';
import { FiexedMenuDirectiveModule } from 'src/app/core/directives/fixed-menu/fixed-menu-directive.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    LeftTopbarItemComponent,
    LeftTopbarLocationComponent
  ],
  imports: [
    CommonModule,
    SocialNetworksModule,
    MenuModule,
    HamburgerDirectiveModule,
    FiexedMenuDirectiveModule,
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {}
