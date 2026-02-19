import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="flex flex-col items-center justify-center py-20">
      <h1 class="text-8xl font-bold text-blue-200 mb-4">404</h1>
      <p class="text-2xl text-gray-600 mb-2">Page non trouvée</p>
      <p class="text-gray-400 mb-8">La page que vous cherchez n'existe pas</p>
      <a routerLink="/" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Retour à l'accueil
      </a>
    </div>
  `
})
export class NotFoundComponent {}
