import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Job } from '../../models/job.model';
import { DatePipe } from '@angular/common';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule, DatePipe, TruncatePipe],
  templateUrl: './job-card.component.html'
})
export class JobCardComponent {
  @Input() job!: Job;
  @Input() isLoggedIn = false;
  @Input() isFavorite = false;

  @Output() addFavorite = new EventEmitter<Job>();
  @Output() removeFavorite = new EventEmitter<Job>();
  @Output() addApplication = new EventEmitter<Job>();

  onToggleFavorite() {
    if (this.isFavorite) {
      this.removeFavorite.emit(this.job);
    } else {
      this.addFavorite.emit(this.job);
    }
  }

  onAddApplication() {
    this.addApplication.emit(this.job);
  }
}
