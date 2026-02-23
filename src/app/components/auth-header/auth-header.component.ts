import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-header',
  standalone: true,
  template: `
    <div class="mb-6">
      <h2 class="text-xl font-bold text-gray-800">{{ title }}</h2>
      <p class="text-gray-400 text-sm mt-1">{{ subtitle }}</p>
    </div>
  `
})
export class AuthHeaderComponent {
  @Input() title = '';
  @Input() subtitle = '';
}
