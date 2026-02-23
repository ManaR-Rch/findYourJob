import { Component, Input } from '@angular/core';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-profile-info',
  standalone: true,
  template: `
    <div class="bg-gray-50 p-4 rounded mb-5">
      <div class="flex items-center gap-3 mb-2">
        <div class="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
          {{ user.prenom.charAt(0).toUpperCase() }}
        </div>
        <p class="font-semibold text-gray-800">{{ user.prenom }} {{ user.nom }}</p>
      </div>
      <p class="text-gray-500 text-sm">{{ user.email }}</p>
    </div>
  `
})
export class ProfileInfoComponent {
  @Input() user!: User;
}
