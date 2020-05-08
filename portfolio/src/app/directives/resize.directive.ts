import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appResize]'
})
export class ResizeDirective implements OnInit{

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.resize();
  }

  @HostListener('window:resize') onWindowResize() {
    this.resize();
  }

  resize(): void {
    this.elementRef.nativeElement.style.minHeight = window.innerHeight - 60 + 'px';
  }
}
