import { Component, HostListener } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SideBarComponent,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isScreenSmall = false;
  
  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    if (event.target.innerWidth > 768) { // adjust the breakpoint as needed
      this.isScreenSmall = false;
    }
  }

  toggleSidebar() {
    this.isScreenSmall = !this.isScreenSmall;
  }
  logo_image: string = 'images/mtb_logo.jpg';
  color = 'red';
}
