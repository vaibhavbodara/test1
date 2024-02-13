import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[SetBackground]'
})
export class SetBackgroundDirective implements OnInit {

  // private element:ElementRef;
  // private renderer:Renderer2;

  //  @Input('SetBackground') backColor:string="#36454F";
  //  We do not have same alias for two different properties
  //  @Input() textColor:string="";


  @Input('SetBackground') changeTextAndBackColor: { backColor: string, textColor: string };

  constructor(private element: ElementRef, private renderer: Renderer2) {
    // this.element=element;
    // this.renderer=renderer;
  }

  ngOnInit() {
    // this.element.nativeElement.style.backgroundColor="#36454F";
    // this.element.nativeElement.style.color="white";

    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.changeTextAndBackColor.backColor);
    this.renderer.setStyle(this.element.nativeElement, 'color', this.changeTextAndBackColor.textColor);
    // this.renderer.setAttribute(this.element.nativeElement,'title','This is example title')
  }


}
