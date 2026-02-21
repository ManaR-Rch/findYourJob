import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApplicationService } from '../../services/application.service';
import { AuthService } from '../../services/auth.service';
import { Application } from '../../models/application.model';
import { ApplicationCardComponent } from './application-card/application-card.component';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  selector: 'app-applications',
  standalone: true,
  imports: [CommonModule, RouterLink, ApplicationCardComponent, LoadingComponent],
  templateUrl: './applications.component.html'
})
export class ApplicationsComponent implements OnInit {
  applications: Application[] = [];
  loading = false;

  constructor(
    private applicationService: ApplicationService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadApplications();
  }

  loadApplications() {
    const user = this.authService.getCurrentUser();
    if (!user?.id) return;

    this.loading = true;
    this.applicationService.getApplications(user.id).subscribe({
      next: (apps) => {
        this.applications = apps;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  onStatusChange(event: { application: Application, status: string }) {
    const updated = { ...event.application, status: event.status as Application['status'] };
    this.applicationService.updateApplication(updated).subscribe({
      next: () => this.loadApplications()
    });
  }

  onNotesChange(event: { application: Application, notes: string }) {
    const updated = { ...event.application, notes: event.notes };
    this.applicationService.updateApplication(updated).subscribe({
      next: () => this.loadApplications()
    });
  }

  onDelete(id: number) {
    this.applicationService.deleteApplication(id).subscribe({
      next: () => this.loadApplications()
    });
  }
}
