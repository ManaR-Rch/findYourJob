import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="flex flex-col items-center justify-center py-20">
      <h1 class="text-6xl font-bold text-gray-300 mb-4">404</h1>
      <p class="text-xl text-gray-600 mb-8">Page non trouvée</p>
      <a routerLink="/" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Retour à l'accueil
      </a>
    </div>
  `
})
export class NotFoundComponent {}
