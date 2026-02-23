import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  template: `
    <div class="flex justify-center items-center py-8">
      <div class="animate-spin rounded-full h-8 w-8 border-2 border-gray-300 border-t-blue-600"></div>
      <p class="text-gray-400 text-sm ml-3">Chargement...</p>
    </div>
  `
})
export class LoadingComponent {}
