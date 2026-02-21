import { Component, Input } from '@angular/core';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-profile-info',
  standalone: true,
  template: `
    <div class="bg-blue-50 p-4 rounded-lg mb-6">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
          {{ user.prenom.charAt(0).toUpperCase() }}
        </div>
        <h3 class="text-lg font-semibold text-blue-600">{{ user.prenom }} {{ user.nom }}</h3>
      </div>
      <p class="text-gray-600 text-sm">{{ user.email }}</p>
    </div>
  `
})
export class ProfileInfoComponent {
  @Input() user!: User;
}
