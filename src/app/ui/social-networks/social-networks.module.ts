import { NgModule } from '@angular/core';
import { SocialNetworksComponent } from './social-networks.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SocialNetworksComponent],
  exports: [SocialNetworksComponent],
  imports: [CommonModule]
})
export class SocialNetworksModule {}
