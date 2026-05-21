import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESUME_DATA } from '../../data/resume.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contact" class="section-wrap">
      <div class="section-header reveal">
        <div class="section-tag">Let's Connect</div>
        <h2 class="section-title">Get In <span class="accent">Touch</span></h2>
        <p class="section-sub">Open to frontend opportunities. Let's build something great.</p>
      </div>
      <div class="contact-wrap">
        <div class="contact-avatar reveal">
          <div class="ripple-avatar">NC</div>
        </div>
        <div class="contact-info reveal">
          <div class="contact-card" *ngFor="let c of data.contact">
            <div class="contact-icon">{{ c.icon }}</div>
            <div>
              <div class="contact-label">{{ c.label }}</div>
              <div class="contact-val">{{ c.value }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-wrap { display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start; justify-content: center; }
    .contact-info { display: flex; flex-direction: column; gap: 16px; }
    .contact-card {
      background: var(--card); border: 1px solid rgba(99,102,241,.15);
      border-radius: 14px; padding: 20px 24px;
      display: flex; align-items: center; gap: 16px; min-width: 260px;
      transition: border-color 0.3s, transform 0.2s;
      &:hover { border-color: rgba(99,102,241,.4); transform: translateX(4px); }
    }
    .contact-icon {
      width: 44px; height: 44px; border-radius: 12px;
      background: rgba(99,102,241,.12);
      display: flex; align-items: center; justify-content: center;
      font-size: 20px; flex-shrink: 0;
    }
    .contact-label { font-size: 0.78rem; color: var(--muted); }
    .contact-val   { font-size: 0.95rem; font-weight: 600; color: var(--text); word-break: break-all; }
    .ripple-avatar {
      width: 200px; height: 200px; border-radius: 50%;
      background: linear-gradient(135deg, var(--indigo), var(--pink));
      display: flex; align-items: center; justify-content: center;
      font-family: var(--font-h); font-size: 64px; font-weight: 800; color: #fff;
      animation: ripplePulse 2.5s ease infinite;
      cursor: pointer; transition: transform 0.2s;
      &:hover { transform: scale(1.05); }
    }
    @media (max-width: 768px) { .contact-wrap { flex-direction: column; align-items: center; } }
  `],
})
export class ContactComponent {
  data = RESUME_DATA;
}
