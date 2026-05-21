import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-particles',
  standalone: true,
  template: `<canvas #canvas></canvas>`,
  styles: [`
    canvas {
      position: fixed; inset: 0;
      z-index: 0; pointer-events: none;
      width: 100%; height: 100%;
    }
  `],
})
export class ParticlesComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private animId = 0;

  ngAfterViewInit() {
    const c = this.canvasRef.nativeElement;
    const ctx = c.getContext('2d')!;
    let W = 0, H = 0;

    const resize = () => { W = c.width = innerWidth; H = c.height = innerHeight; };
    resize();
    window.addEventListener('resize', resize);

    interface Pt { x: number; y: number; vx: number; vy: number; r: number; }
    const pts: Pt[] = Array.from({ length: 90 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
    }));

    const colors = ['rgba(99,102,241,', 'rgba(236,72,153,', 'rgba(6,182,212,'];

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = colors[i % 3] + '0.7)'; ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[j].x - p.x, dy = pts[j].y - p.y, d = Math.hypot(dx, dy);
          if (d < 140) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = colors[i % 3] + (1 - d / 140) * 0.25 + ')';
            ctx.lineWidth = 0.6; ctx.stroke();
          }
        }
      });
      this.animId = requestAnimationFrame(draw);
    };
    draw();
  }

  ngOnDestroy() { cancelAnimationFrame(this.animId); }
}
