import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'side-bar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
