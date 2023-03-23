import { Directive,
    HostListener } from '@angular/core';
  
  @Directive({
    selector: '[no-open]',
  })
  export class NoopenDirective {
      
    constructor() {}
 
   /* @HostListener('click', ['$event'])
    onClick(event: Event) {
      event.preventDefault()
    }*/
  
    @HostListener('click')
    onClick() {
        return false;
    }
  }
  