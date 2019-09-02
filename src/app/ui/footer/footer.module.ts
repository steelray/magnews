import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
import { SocialNetworksModule } from '../social-networks/social-networks.module';

@NgModule({
  declarations: [FooterComponent],
  imports: [SocialNetworksModule],
  exports: [FooterComponent]
})
export class FooterModule {}
