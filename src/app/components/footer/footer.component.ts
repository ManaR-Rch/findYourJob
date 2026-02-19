import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-gray-800 text-white text-center py-6 mt-8">
      <p class="text-sm">&copy; 2025 JobFinder - Tous droits réservés</p>
      <p class="text-xs text-gray-400 mt-1">Données fournies par l'API Adzuna</p>
    </footer>
  `
})
export class FooterComponent {}
