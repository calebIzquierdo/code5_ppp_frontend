import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PracticasService } from '../../core/services/Practicas.service';

@Component({
  selector: 'app-practicas',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './practica.component.html',
  styleUrls: ['./practica.component.css']
})
export class PracticasComponent implements OnInit {
  students: any[] = [];
  loading: boolean = true;

  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor(private practicasService: PracticasService) {}

  ngOnInit(): void {
    this.practicasService.getStudentsWithPracticeStatus().subscribe({
      next: (res) => {
        this.students = res.data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar los datos de estudiantes:', err);
        this.loading = false;
      }
    });
  }

  get totalPages(): number {
    return Math.ceil(this.students.length / this.itemsPerPage);
  }

  get paginatedStudents(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.students.slice(startIndex, startIndex + this.itemsPerPage);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  get visiblePages(): number[] {
    const pages = [];
    const maxVisible = 2; // 2 antes y después del actual
    const start = Math.max(1, this.currentPage - maxVisible);
    const end = Math.min(this.totalPages, this.currentPage + maxVisible);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }
}