import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  mouthOpen = signal(false);
  eyeTransformX = signal('50%');
  eyeTransformY = signal('50%');
  mouseX = signal(50);
  mouseY = signal(50);

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const xPercent = (e.clientX * 100) / window.innerWidth;
    const yPercent = (e.clientY * 100) / window.innerHeight;
    this.eyeTransformX.set(xPercent + "%");
    this.eyeTransformY.set(yPercent + "%");
    this.mouseX.set(xPercent);
    this.mouseY.set(yPercent);
  }

  openResume() {
    window.open('/src/files/resume.pdf', '_blank');
  }

  scrollSection(sectionNumber: number) {
    const sectionHeight = window.innerHeight;
    window.scrollTo({
      top: sectionHeight * sectionNumber,
      behavior: 'smooth'
    });
  }

  setMouthState(isOpen: boolean) {
    this.mouthOpen.set(isOpen);
  }
}
