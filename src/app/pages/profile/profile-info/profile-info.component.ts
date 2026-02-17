import { Component, Input } from '@angular/core';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-profile-info',
  standalone: true,
  template: `
    <div class="bg-blue-50 p-4 rounded-lg mb-6">
      <h3 class="text-lg font-semibold text-blue-600 mb-2">Informations actuelles</h3>
      <p><span class="font-medium">Nom :</span> {{ user.nom }}</p>
      <p><span class="font-medium">Prénom :</span> {{ user.prenom }}</p>
      <p><span class="font-medium">Email :</span> {{ user.email }}</p>
    </div>
  `
})
export class ProfileInfoComponent {
  @Input() user!: User;
}
