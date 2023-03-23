import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: 'article'
})
export class BorderDirective {

  @HostBinding('style.borderColor')
  borderColor = "transparent";

  constructor() { }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.borderColor = "blue";
  }
  @HostListener('mouseout')
  onMouseOut() {
    this.borderColor = "transparent";
  }


}
