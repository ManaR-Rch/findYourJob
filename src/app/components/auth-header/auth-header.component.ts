import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-header',
  standalone: true,
  template: `
    <div class="text-center mb-6">
      <h1 class="text-3xl font-bold text-blue-600 mb-1">JobFinder</h1>
      <h2 class="text-xl font-semibold text-gray-700">{{ title }}</h2>
      <p class="text-gray-400 text-sm mt-1">{{ subtitle }}</p>
    </div>
  `
})
export class AuthHeaderComponent {
  @Input() title = '';
  @Input() subtitle = '';
}
