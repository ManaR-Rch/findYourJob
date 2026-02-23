import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="flex flex-col items-center justify-center py-20">
      <h1 class="text-6xl font-bold text-gray-300 mb-4">404</h1>
      <p class="text-lg text-gray-600 mb-2">Page non trouvee</p>
      <p class="text-gray-400 text-sm mb-6">La page que vous cherchez n'existe pas</p>
      <a routerLink="/" class="bg-blue-600 text-white px-5 py-2 rounded text-sm hover:bg-blue-700">
        Retour a l'accueil
      </a>
    </div>
  `
})
export class NotFoundComponent {}
