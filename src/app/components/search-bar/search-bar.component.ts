import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html'
})
export class SearchBarComponent {
  keyword = '';
  location = '';

  @Output() search = new EventEmitter<{ keyword: string, location: string }>();

  onSearch() {
    if (this.keyword.trim()) {
      this.search.emit({ keyword: this.keyword.trim(), location: this.location.trim() });
    }
  }
}
