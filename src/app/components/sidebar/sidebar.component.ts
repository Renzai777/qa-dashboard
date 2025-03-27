import { Component, HostBinding } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule, // Add CommonModule
    RouterModule,
    MatListModule,
    MatIconModule, // Add MatIconModule
    MatButtonModule // Add MatButtonModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isCollapsed = false;

  @HostBinding('class.collapsed') get collapsed() {
    return this.isCollapsed;
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
