import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESUME_DATA } from '../../data/resume.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements AfterViewInit {
  data = RESUME_DATA;
  animatedBars = new Set<string>();

  @ViewChildren('skillSection') skillSections!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Trigger bar animations
            entry.target.querySelectorAll<HTMLElement>('.bar-fill').forEach((bar) => {
              const level = bar.dataset['level'];
              if (level) bar.style.width = level + '%';
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    this.skillSections.forEach((ref) => observer.observe(ref.nativeElement));
  }
}
