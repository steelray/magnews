import { Directive, ElementRef } from '@angular/core';

declare var $: any;

@Directive({
  selector: '[appHamburger]'
})
export class HamburgerDirective {
  constructor(private el: ElementRef) {
    $(this.el.nativeElement).on('click', function() {
      $(this).toggleClass('is-active');
      $('.menu-mobile').slideToggle();
    });
  }
}
