import { Component } from '@angular/core';

@Component({
  selector: 'app-home-features',
  standalone: true,
  template: `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
      <div class="border border-gray-200 p-5 rounded text-center">
        <h3 class="font-semibold mb-2">Recherche</h3>
        <p class="text-gray-500 text-sm">Recherchez par mots cles et localisation parmi des milliers d'offres</p>
      </div>
      <div class="border border-gray-200 p-5 rounded text-center">
        <h3 class="font-semibold mb-2">Favoris</h3>
        <p class="text-gray-500 text-sm">Gardez les offres qui vous interessent pour les retrouver plus tard</p>
      </div>
      <div class="border border-gray-200 p-5 rounded text-center">
        <h3 class="font-semibold mb-2">Candidatures</h3>
        <p class="text-gray-500 text-sm">Gerez le statut de chaque candidature et ajoutez des notes</p>
      </div>
    </div>
  `
})
export class HomeFeaturesComponent {}
