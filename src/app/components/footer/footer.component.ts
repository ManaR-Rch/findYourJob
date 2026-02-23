import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="border-t border-gray-200 text-center py-5 mt-8">
      <p class="text-sm text-gray-500">&copy; 2025 JobFinder</p>
      <p class="text-xs text-gray-400 mt-1">Donnees fournies par l'API Adzuna</p>
    </footer>
  `
})
export class FooterComponent {}
