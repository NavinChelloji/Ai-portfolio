import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESUME_DATA } from '../../data/resume.data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="education" class="section-wrap">
      <div class="section-header reveal">
        <div class="section-tag">Academic Background</div>
        <h2 class="section-title">Education &amp; <span class="accent">Qualifications</span></h2>
      </div>
      <div class="edu-grid">
        <div class="edu-card reveal" *ngFor="let edu of data.education">
          <div class="edu-icon">{{ edu.icon }}</div>
          <div class="edu-degree">{{ edu.degree }}</div>
          <div class="edu-school">{{ edu.school }}</div>
          <span class="edu-badge">{{ edu.badge }}</span>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .edu-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; }
    .edu-card {
      background: var(--card); border: 1px solid rgba(6,182,212,.15);
      border-radius: var(--radius); padding: 28px;
      transition: border-color 0.3s, box-shadow 0.3s;
      &:hover { border-color: rgba(6,182,212,.4); box-shadow: 0 8px 32px rgba(6,182,212,.12); }
    }
    .edu-icon   { font-size: 28px; margin-bottom: 14px; }
    .edu-degree { font-family: var(--font-h); font-size: 1rem; font-weight: 700; margin-bottom: 4px; }
    .edu-school { color: var(--muted); font-size: 0.85rem; margin-bottom: 12px; }
    .edu-badge  {
      display: inline-block;
      background: linear-gradient(135deg, rgba(245,158,11,.15), rgba(236,72,153,.1));
      border: 1px solid rgba(245,158,11,.3); border-radius: 99px;
      padding: 4px 14px; font-size: 0.8rem; font-weight: 700; color: var(--amber);
    }
  `],
})
export class EducationComponent {
  data = RESUME_DATA;
}
