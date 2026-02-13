import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-gray-800 text-white text-center py-4 mt-8">
      <p>&copy; 2026 JobFinder - Tous droits réservés</p>
    </footer>
  `
})
export class FooterComponent {}
