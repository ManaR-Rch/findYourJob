import { Component } from '@angular/core';

@Component({
  selector: 'app-home-features',
  standalone: true,
  template: `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl">
      <div class="bg-white p-6 rounded-lg shadow text-center">
        <div class="text-3xl mb-3">🔍</div>
        <h3 class="text-xl font-semibold mb-2">Recherche simple</h3>
        <p class="text-gray-500">Recherchez par mots clés et localisation</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow text-center">
        <div class="text-3xl mb-3">⭐</div>
        <h3 class="text-xl font-semibold mb-2">Sauvegardez vos favoris</h3>
        <p class="text-gray-500">Gardez les offres qui vous intéressent</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow text-center">
        <div class="text-3xl mb-3">📋</div>
        <h3 class="text-xl font-semibold mb-2">Suivez vos candidatures</h3>
        <p class="text-gray-500">Gérez le statut de chaque candidature</p>
      </div>
    </div>
  `
})
export class HomeFeaturesComponent {}
