import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeFeaturesComponent } from './home-features/home-features.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HomeFeaturesComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {}
