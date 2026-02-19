import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (showButton) {
      <button (click)="scrollToTop()"
              class="fixed bottom-6 right-6 bg-blue-600 text-white w-10 h-10 rounded-full shadow-lg hover:bg-blue-700 flex items-center justify-center z-50">
        ↑
      </button>
    }
  `
})
export class ScrollTopComponent {
  showButton = false;

  @HostListener('window:scroll')
  onScroll() {
    this.showButton = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
