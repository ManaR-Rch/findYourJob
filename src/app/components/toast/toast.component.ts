import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ToastService, Toast } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (toast) {
      <div class="fixed top-20 right-4 z-50 px-6 py-3 rounded-lg shadow-lg text-white text-sm animate-fade-in"
           [ngClass]="getToastClass()">
        {{ toast.message }}
      </div>
    }
  `,
  styles: [`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fadeIn 0.3s ease-in-out;
    }
  `]
})
export class ToastComponent implements OnInit, OnDestroy {
  toast: Toast | null = null;
  private sub!: Subscription;
  private timer: any;

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.sub = this.toastService.toast$.subscribe(toast => {
      this.toast = toast;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.toast = null;
      }, 3000);
    });
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
    clearTimeout(this.timer);
  }

  getToastClass(): string {
    switch (this.toast?.type) {
      case 'success': return 'bg-green-600';
      case 'error': return 'bg-red-600';
      case 'info': return 'bg-blue-600';
      default: return 'bg-gray-600';
    }
  }
}
