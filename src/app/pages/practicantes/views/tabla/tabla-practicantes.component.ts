import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentPracticeStatus } from '../../../../shared/interfaces/student-practice.interface';

@Component({
  selector: 'app-tabla-practicantes',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tabla-practicantes.component.html',
  styleUrls: ['./tabla-practicantes.component.css']
})
export class TablaPracticantesComponent implements OnInit {
  @Input() students: StudentPracticeStatus[] = [];
  @Input() loading: boolean = true;

  currentPage: number = 1;
  itemsPerPage: number = 10;

  ngOnInit(): void {}

  get totalPages(): number {
    return Math.ceil(this.students.length / this.itemsPerPage);
  }

  get paginatedStudents(): StudentPracticeStatus[] {
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
    const maxVisible = 2;
    const start = Math.max(1, this.currentPage - maxVisible);
    const end = Math.min(this.totalPages, this.currentPage + maxVisible);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }
}
