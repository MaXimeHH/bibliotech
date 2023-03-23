import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[highLight]',
})
export class highLightDirective {
  @HostBinding('style.backgroundColor')
  bgHighLightColorInitial = 'transparent';

  @Input('background-color')
  bgHighLightColor = 'yellow';

  @Input('default-color')
  bgHighLightDefaultColor = 'transparent';

  constructor() {}

  ngAfterViewInit() {
    this.bgHighLightColorInitial = this.bgHighLightDefaultColor;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgHighLightColorInitial = this.bgHighLightColor;
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.bgHighLightColorInitial = this.bgHighLightDefaultColor;
  }
}
