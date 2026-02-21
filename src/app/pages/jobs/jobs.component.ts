import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { JobCardComponent } from '../../components/job-card/job-card.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { LoadingComponent } from '../../components/loading/loading.component';
import { JobService } from '../../services/job.service';
import { AuthService } from '../../services/auth.service';
import { Job } from '../../models/job.model';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { FavoriteOffer } from '../../models/favorite.model';
import { Application } from '../../models/application.model';
import { selectAllFavorites } from '../../store/favorites.selectors';
import * as FavoritesActions from '../../store/favorites.actions';
import { ApplicationService } from '../../services/application.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, JobCardComponent, PaginationComponent, LoadingComponent],
  templateUrl: './jobs.component.html'
})
export class JobsComponent implements OnInit, OnDestroy {
  jobs: Job[] = [];
  loading = false;
  currentPage = 1;
  totalPages = 1;
  totalResults = 0;
  errorMessage = '';
  currentKeyword = '';
  currentLocation = '';
  favoritesList: FavoriteOffer[] = [];
  applicationsList: Application[] = [];
  private favSub!: Subscription;

  constructor(
    private jobService: JobService,
    public authService: AuthService,
    private store: Store,
    private applicationService: ApplicationService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      const user = this.authService.getCurrentUser();
      if (user?.id) {
        this.store.dispatch(FavoritesActions.loadFavorites({ userId: user.id }));
      }
    }
    this.favSub = this.store.select(selectAllFavorites).subscribe(favs => {
      this.favoritesList = favs;
    });

    this.loadApplications();
  }

  loadApplications() {
    const user = this.authService.getCurrentUser();
    if (!user?.id) return;
    this.applicationService.getApplications(user.id).subscribe(apps => {
      this.applicationsList = apps;
    });
  }

  ngOnDestroy() {
    if (this.favSub) {
      this.favSub.unsubscribe();
    }
  }

  onSearch(event: { keyword: string, location: string }) {
    this.currentKeyword = event.keyword;
    this.currentLocation = event.location;
    this.currentPage = 1;
    this.searchJobs();
  }

  searchJobs() {
    this.loading = true;
    this.errorMessage = '';

    this.jobService.searchJobs(this.currentKeyword, this.currentLocation, this.currentPage).subscribe({
      next: (result) => {
        this.jobs = result.jobs;
        this.totalResults = result.total;
        this.totalPages = Math.ceil(result.total / 10);
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Erreur lors de la recherche. Veuillez réessayer.';
        this.loading = false;
      }
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.searchJobs();
    window.scrollTo(0, 0);
  }

  isFavorite(jobId: string): boolean {
    return this.favoritesList.some(f => f.offerId === jobId);
  }

  onAddFavorite(job: Job) {
    const user = this.authService.getCurrentUser();
    if (!user?.id) return;

    const favorite: FavoriteOffer = {
      userId: user.id,
      offerId: job.id,
      title: job.title,
      company: job.company,
      location: job.location
    };
    this.store.dispatch(FavoritesActions.addFavorite({ favorite }));
  }

  onRemoveFavorite(job: Job) {
    const fav = this.favoritesList.find(f => f.offerId === job.id);
    if (fav?.id) {
      this.store.dispatch(FavoritesActions.removeFavorite({ id: fav.id }));
    }
  }

  isApplied(jobId: string): boolean {
    return this.applicationsList.some(a => a.offerId === jobId);
  }

  onAddApplication(job: Job) {
    const user = this.authService.getCurrentUser();
    if (!user?.id) return;

    if (this.isApplied(job.id)) {
      this.toastService.show('Vous suivez d\u00e9j\u00e0 cette candidature', 'info');
      return;
    }

    if (!confirm('Voulez-vous ajouter cette offre à vos candidatures ?')) return;

    this.applicationService.addApplication({
      userId: user.id,
      offerId: job.id,
      apiSource: job.apiSource,
      title: job.title,
      company: job.company,
      location: job.location,
      url: job.url,
      status: 'en_attente',
      notes: '',
      dateAdded: new Date().toISOString()
    }).subscribe({
      next: () => {
        this.toastService.show('Candidature ajoutée au suivi !', 'success');
        this.loadApplications();
      },
      error: () => this.toastService.show('Erreur lors de l\'ajout de la candidature', 'error')
    });
  }
}
