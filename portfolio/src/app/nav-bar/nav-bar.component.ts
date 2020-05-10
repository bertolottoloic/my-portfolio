import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @ViewChild('liste') liste: ElementRef;
  private display: string = "none"
  public window: Window = window;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    if(this.window.innerWidth<992){
      this.display = (this.display === 'none') ? 'flex' : 'none';
      this.liste.nativeElement.style.display = this.display;
      
    }
  }

  @HostListener('window: resize') onWindowResize(){
    if(this.window.innerWidth>=992){
      this.display = "none";
      this.liste.nativeElement.style.display = 'inline-flex';
    } else {
      if(this.display === 'none') this.liste.nativeElement.style.display = 'none';
    }

  }

}
