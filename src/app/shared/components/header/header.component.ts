import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
[x: string]: any;
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  toggleSideBar() {
    const screenWidth = window.innerWidth;

    // If the screen width is less than or equal to 767px, toggle the sidebar
   
      // Otherwise, dispatch a resize event to trigger responsive layout
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 300);
    
  }
}
