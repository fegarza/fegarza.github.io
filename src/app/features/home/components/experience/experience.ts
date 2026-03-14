import { Component, signal, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.css']
})
export class ExperienceComponent implements AfterViewInit {
  @ViewChildren('animatedItem') animatedItems!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          entry.target.classList.remove('opacity-0');
          // Optional: stop observing once animated
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    this.animatedItems.forEach(item => observer.observe(item.nativeElement));
  }

  experiences = signal<Experience[]>([
    {
      company: 'ITJ',
      role: 'Software Engineer',
      period: 'February 2025 - Present',
      location: 'Mexico',
      description: [
        'Mid Java Developer at ITJ, working with Exact Sciences.'
      ]
    },
    {
      company: 'ADUASIS NLD',
      role: 'Analyst Programmer',
      period: 'February 2020 - January 2025',
      location: 'Nuevo Laredo, Tamaulipas, México',
      description: [
        'Image Compressor: Optimized server storage usage, achieving a 40% reduction in space used. This improvement also enhanced image download times by 60%, benefiting the user experience in applications reliant on these resources.',
        'Warehouse Yard Management Mobile App: Implemented a synchronization system that enabled the app to function offline, reducing mobile data costs. This enhancement increased operational productivity by 30% by ensuring service continuity even in areas with limited connectivity.',
        'Document Digitizer: Automated the digitization of customs documents, transforming a manual task into an automated workflow running in the background to interact with government web services. This solution streamlined the creation of electronic files, reducing processing times and significantly improving efficiency in customs procedures.'
      ]
    },
    {
      company: 'National Technological Institute of Mexico',
      role: 'Developer',
      period: 'March 2017 - January 2020',
      location: 'Nuevo Laredo, Tamaulipas, México',
      description: [
        'Complementary Credits System: Design, development, and implementation of the complementary credits system for teachers.',
        'Tutoring System: Design, development, and implementation of the system for managing academic tutoring.'
      ]
    }
  ]);
}
