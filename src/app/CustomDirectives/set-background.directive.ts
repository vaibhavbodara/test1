import { Directive,Input ,ElementRef,Renderer2, OnInit} from '@angular/core';

@Directive({
  selector: '[SetBackground]'
})
export class SetBackgroundDirective implements OnInit {

  // private element:ElementRef;
   // private renderer:Renderer2;
   @Input('SetBackground') backColor:string="";
   @Input() textColor:string="";
   @Input() title:string="";

   constructor(private element:ElementRef,private renderer:Renderer2){
      // this.element=element;
      // this.renderer=renderer;
   }
       
      ngOnInit(){
         // this.element.nativeElement.style.backgroundColor="#36454F";
         // this.element.nativeElement.style.color="white";
   
        this.renderer.setStyle(this.element.nativeElement,'backgroundColor',this.backColor);
        this.renderer.setStyle(this.element.nativeElement,'color',this.textColor);
      //   this.renderer.setAttribute(this.element.nativeElement,'title','This is example title')
      }
        

}
