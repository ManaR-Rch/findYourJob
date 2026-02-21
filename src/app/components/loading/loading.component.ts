import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  template: `
    <div class="flex flex-col justify-center items-center py-8">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      <p class="text-gray-400 text-sm mt-3">Chargement...</p>
    </div>
  `
})
export class LoadingComponent {}
