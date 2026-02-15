import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Application } from '../../../models/application.model';

@Component({
  selector: 'app-application-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './application-card.component.html'
})
export class ApplicationCardComponent {
  @Input() application!: Application;
  @Output() statusChange = new EventEmitter<{ application: Application, status: string }>();
  @Output() notesChange = new EventEmitter<{ application: Application, notes: string }>();
  @Output() delete = new EventEmitter<number>();

  editingNotes = false;
  notesText = '';

  onStatusChange(status: string) {
    this.statusChange.emit({ application: this.application, status });
  }

  startEditNotes() {
    this.notesText = this.application.notes;
    this.editingNotes = true;
  }

  saveNotes() {
    this.notesChange.emit({ application: this.application, notes: this.notesText });
    this.editingNotes = false;
  }

  onDelete() {
    if (this.application.id) {
      this.delete.emit(this.application.id);
    }
  }

  getStatusColor(): string {
    switch (this.application.status) {
      case 'en_attente': return 'bg-yellow-100 text-yellow-800';
      case 'accepte': return 'bg-green-100 text-green-800';
      case 'refuse': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  getStatusLabel(): string {
    switch (this.application.status) {
      case 'en_attente': return 'En attente';
      case 'accepte': return 'Accepté';
      case 'refuse': return 'Refusé';
      default: return this.application.status;
    }
  }
}
