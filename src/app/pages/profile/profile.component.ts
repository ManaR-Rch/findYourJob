import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  user: User | null = null;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    if (!this.user) {
      this.router.navigate(['/login']);
      return;
    }

    this.profileForm = this.fb.group({
      nom: [this.user.nom, Validators.required],
      prenom: [this.user.prenom, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      password: ['', Validators.minLength(6)]
    });
  }

  onUpdate() {
    if (this.profileForm.invalid || !this.user) return;

    this.successMessage = '';
    this.errorMessage = '';

    const updatedUser: User = {
      ...this.user,
      nom: this.profileForm.value.nom,
      prenom: this.profileForm.value.prenom,
      email: this.profileForm.value.email
    };

    if (this.profileForm.value.password) {
      updatedUser.password = this.profileForm.value.password;
    }

    this.authService.updateUser(updatedUser).subscribe({
      next: (user) => {
        const { password, ...safeUser } = user;
        localStorage.setItem('currentUser', JSON.stringify(safeUser));
        this.user = safeUser;
        this.successMessage = 'Profil mis à jour avec succès';
      },
      error: () => {
        this.errorMessage = 'Erreur lors de la mise à jour';
      }
    });
  }

  onDelete() {
    if (!confirm('Êtes-vous sûr de vouloir supprimer votre compte ?')) return;
    if (!this.user?.id) return;

    this.authService.deleteUser(this.user.id).subscribe({
      next: () => {
        this.authService.logout();
        this.router.navigate(['/']);
      },
      error: () => {
        this.errorMessage = 'Erreur lors de la suppression du compte';
      }
    });
  }
}
