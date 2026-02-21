import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FavoriteOffer } from '../../models/favorite.model';
import { selectAllFavorites, selectFavoritesLoading } from '../../store/favorites.selectors';
import * as FavoritesActions from '../../store/favorites.actions';
import { AuthService } from '../../services/auth.service';
import { FavoriteCardComponent } from './favorite-card/favorite-card.component';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, RouterLink, FavoriteCardComponent, LoadingComponent],
  templateUrl: './favorites.component.html'
})
export class FavoritesComponent implements OnInit {
  favorites$: Observable<FavoriteOffer[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store, private authService: AuthService) {
    this.favorites$ = this.store.select(selectAllFavorites);
    this.loading$ = this.store.select(selectFavoritesLoading);
  }

  ngOnInit() {
    const user = this.authService.getCurrentUser();
    if (user?.id) {
      this.store.dispatch(FavoritesActions.loadFavorites({ userId: user.id }));
    }
  }

  onRemove(id: number) {
    this.store.dispatch(FavoritesActions.removeFavorite({ id }));
  }
}
