import { Directive, ElementRef, OnInit, HostListener, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appResizeTrainee]'
})
export class ResizeTraineeDirective implements OnInit {

  constructor(public elementRef: ElementRef) { }

  


  ngOnInit(): void {
    this.resize();
  }

  @HostListener('window: resize') onWindowResize(){
    this.resize();
  }

  
  resize(){
    if(window.innerWidth<992){
      this.elementRef.nativeElement.style.width = '100%';
    } else {
      this.elementRef.nativeElement.style.width = '50%';
    }
  }


}
