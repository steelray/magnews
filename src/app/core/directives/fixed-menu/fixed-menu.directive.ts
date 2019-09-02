import { Directive, ElementRef, OnInit } from '@angular/core';

declare var $: any;

@Directive({
  selector: '[appFixedMenu]'
})
export class FixedMenuDirective implements OnInit {
  ngOnInit(): void {
    try {
      const posNav = $('.wrap-main-nav').offset().top;
      const menuDesktop = $('.container-menu-desktop');
      const mainNav = $('.main-nav');
      let lastScrollTop = 0;
      let st = 0;

      $(window).on('scroll', () => {
        fixedHeader();
      });

      $(window).on('resize', () => {
        fixedHeader();
      });

      $(window).on('load', () => {
        fixedHeader();
      });

      const fixedHeader = () => {
        st = $(window).scrollTop();

        if (st > posNav + mainNav.outerHeight()) {
          $(menuDesktop).addClass('fix-menu-desktop');
        } else if (st <= posNav) {
          $(menuDesktop).removeClass('fix-menu-desktop');
        }

        if (st > lastScrollTop) {
          $(mainNav).removeClass('show-main-nav');
        } else {
          $(mainNav).addClass('show-main-nav');
        }

        lastScrollTop = st;
      };
    } catch (er) {
      console.log(er);
    }
  }
}
