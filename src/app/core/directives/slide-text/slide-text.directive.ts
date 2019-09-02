import { Directive, ElementRef, OnInit } from '@angular/core';
declare var $: any;
@Directive({
  selector: '[appSlideText]'
})
export class SlideTextDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    try {
      const slideTxt = this.el.nativeElement;
      const itemSlideTxt = [...slideTxt.children];
      const data = [];
      let count = 0;
      const animIn = slideTxt.dataset.in;
      const animOut = slideTxt.dataset.out;

      // console.log([...itemSlideTxt]);
      // return;
      for (let i = 0; i < itemSlideTxt.length; i++) {
        data[i] = $(itemSlideTxt[i]).clone();
        $(data[i]).addClass('clone');
      }

      // tslint:disable-next-line:only-arrow-functions
      $(window).on('load', function() {
        $(slideTxt)
          .find('.slide100-txt-item')
          .remove();
        $(slideTxt).append($(data[0]).clone());
        $(slideTxt)
          .find('.slide100-txt-item.clone')
          .addClass(animIn + ' visible-true');
        count = 0;
      });

      // tslint:disable-next-line:only-arrow-functions
      setInterval(function() {
        $(slideTxt)
          .find('.slide100-txt-item.ab-t-l.' + animOut)
          .remove();
        $(slideTxt)
          .find('.slide100-txt-item')
          .addClass('ab-t-l ' + animOut);

        if (count >= data.length - 1) {
          count = 0;
        } else {
          count++;
        }

        // console.log($(data[count]).text());

        $(slideTxt).append($(data[count]).clone());
        $(slideTxt)
          .find('.slide100-txt-item.clone')
          .addClass(animIn + ' visible-true');
      }, 5000);
    } catch (er) {
      console.log(er);
    }
  }
}
