import { Component } from '@angular/core';
import { NgClass, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, NgClass, RouterModule]  // Ensure CommonModule, NgClass, and RouterModule are imported
})
export class AppComponent {
  isMenuOpen = false;

  // Toggle menu open/close
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Close the menu after navigation
  closeMenuOnNavigate() {
    this.isMenuOpen = false;
  }
}