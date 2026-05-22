import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ParticlesComponent } from './components/particles/particles.component';
import { HeroComponent } from './components/hero/hero.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent, ParticlesComponent, HeroComponent,
    SkillsComponent, ExperienceComponent, ProjectsComponent,
    EducationComponent, ContactComponent, ChatbotComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loading = true;
  cursorX = 0; cursorY = 0;
  ringX = 0; ringY = 0;
  showCursorRing = false;
  private moveTimeout: any;


  ngOnInit() {
    setTimeout(() => { this.loading = false; }, 2200);
    this.initRevealObserver();
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.cursorX = e.clientX;
    this.cursorY = e.clientY;
    this.showCursorRing = true;

    clearTimeout(this.moveTimeout);

    this.moveTimeout = setTimeout(() => {
      this.showCursorRing = false;
    }, 300); // hide after 300ms of no movement
  }

  private initRevealObserver() {
    setTimeout(() => {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
        { threshold: 0.12 }
      );
      document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    }, 300);
  }
}
