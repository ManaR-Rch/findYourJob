import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FavoriteOffer } from '../../../models/favorite.model';

@Component({
  selector: 'app-favorite-card',
  standalone: true,
  templateUrl: './favorite-card.component.html'
})
export class FavoriteCardComponent {
  @Input() favorite!: FavoriteOffer;
  @Output() remove = new EventEmitter<number>();

  onRemove() {
    if (this.favorite.id) {
      this.remove.emit(this.favorite.id);
    }
  }
}
