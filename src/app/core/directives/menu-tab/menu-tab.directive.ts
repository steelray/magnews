import { Directive, ElementRef, OnInit } from '@angular/core';

declare var $: any;

@Directive({
  selector: '[appMenuTab]'
})
export class MenuTabDirective implements OnInit {
  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    $(this.el.nativeElement).hover(function() {
      $(this).tab('show');
    });
  }
}
