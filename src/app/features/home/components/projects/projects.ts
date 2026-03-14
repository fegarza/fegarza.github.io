import { Component, signal, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  image?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent implements AfterViewInit {
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

  projects = signal<Project[]>([
    {
      title: 'Frida Query Builder',
      description: 'A lightweight, minimal abstraction layer for building SQLite queries in Dart. It provides a fluent API for DDL and DML operations without the overhead of heavy ORMs.',
      technologies: ['Dart', 'SQLite', 'Flutter'],
      githubLink: 'https://github.com/fegarza/frida_query_builder'
    },
    {
      title: 'Cobraly',
      description: 'Payment and Collection Reminder Application.',
      technologies: ['Dart', 'Flutter', 'Android'],
      githubLink: 'https://github.com/fegarza/app-cobraly'
    },
     {
      title: 'Snack Express',
      description: 'Point of Sale (POS) for fast food stands.',
      technologies: ['C#', 'WPF'],
      githubLink: 'https://github.com/fegarza/SnackExpress'
    },
    {
      title: 'Minecraft Maze',
      description: 'A project developed in C# for the Data Structures curriculum.',
      technologies: ['C#', 'Windows Forms', 'Data Structures'],
      githubLink: 'https://github.com/fegarza/LaberintoMinecraft'
    },
    {
      title: 'RandomTeam',
      description: 'The project involves registering team names and subsequently assigning them a random order. This would be useful, for example, when a teacher needs to determine the sequence of team presentations or plan the submission dates for a specific group assignment.',
      technologies: ['Java', 'Android'],
      githubLink: 'https://github.com/fegarza/RandomTeam'
    }
  ]);
}
