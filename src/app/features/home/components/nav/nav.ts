import { Component, HostListener, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavItem {
  label: string;
  sectionId: string;
  icon: string;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.html',
  styleUrls: ['./nav.css']
})
export class NavComponent implements OnInit {
  isDarkMode = signal<boolean>(true); // Default to dark since the hero is dark

  navItems = signal<NavItem[]>([
    { label: 'Home', sectionId: 'hero', icon: 'fa-house' },
    { label: 'About', sectionId: 'about', icon: 'fa-user' },
    { label: 'Experience', sectionId: 'experience', icon: 'fa-briefcase' },
    // Placeholders for future sections
    { label: 'Projects', sectionId: 'projects', icon: 'fa-code' },
    { label: 'Education', sectionId: 'education', icon: 'fa-graduation-cap' }
  ]);

  ngOnInit() {
    if (this.isDarkMode()) {
      document.documentElement.classList.add('dark');
    }
  }

  toggleTheme(): void {
    this.isDarkMode.update(v => !v);
    if (this.isDarkMode()) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
