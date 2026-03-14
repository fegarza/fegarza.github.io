import { Component, signal, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrls: ['./education.css']
})
export class EducationComponent implements AfterViewInit {
  @ViewChildren('animatedItem') animatedItems!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    this.animatedItems.forEach(item => observer.observe(item.nativeElement));
  }

  educationList = signal<Education[]>([
    {
      institution: 'Universidad Tecmilenio',
      degree: "Master's degree, Information Technology Management",
      period: 'September 2022 - April 2024'
    },
    {
      institution: 'National Technological Institute of Mexico',
      degree: "Bachelor's degree, Computer Systems Engineer",
      period: 'July 2017 - December 2021',
      description: 'Developed key systems including an academic credit management platform and a web application for academic tutoring.'
    }
  ]);
}
