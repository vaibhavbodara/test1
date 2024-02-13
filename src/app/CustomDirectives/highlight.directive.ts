import { Directive ,ElementRef,Renderer2,HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element:ElementRef, private renderer:Renderer2){}

  // here in hostlistener parameter give an event which execute the given method and adding css class 
  @HostListener('mouseenter') OnMouseEnter(){
     this.renderer.addClass(this.element.nativeElement,'highlight-product')
  }

  @HostListener('mouseout')OnMouseOut(){
    this.renderer.removeClass(this.element.nativeElement,'highlight-product')
  }

}
