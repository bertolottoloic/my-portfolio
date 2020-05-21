import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { serverUrlUploads } from 'src/configs/server.config';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @ViewChild('liste') liste: ElementRef;
  private display: string = "none"
  public window: Window = window;
  public serverUrlUploads: string = serverUrlUploads;
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
    if(this.window.innerWidth > 991){
      this.display = "none";
      this.liste.nativeElement.style.display = 'inline-flex';
    } else {
      if(this.display === 'none') this.liste.nativeElement.style.display = 'none';
    }

  }

}
