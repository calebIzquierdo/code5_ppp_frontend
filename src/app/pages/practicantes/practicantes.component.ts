import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaPracticantesComponent } from './views/tabla/tabla-practicantes.component';
import { HorasPracticantesComponent } from './views/horas/horas-practicantes.component';
import { StudentPracticeStatus } from '../../shared/interfaces/student-practice.interface';
import { StudentPracticeService } from '../../core/services/student-practice.service';

@Component({
  selector: 'app-practicantes',
  standalone: true,
  templateUrl: './practicantes.component.html',
  styleUrls: ['./practicantes.component.css'],
  imports: [
    CommonModule,
    TablaPracticantesComponent,
    HorasPracticantesComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PracticantesComponent implements OnInit {
  selectedTab: 'tabla' | 'horas' = 'tabla';
  students: StudentPracticeStatus[] = [];
  loading: boolean = true;

  constructor(private studentPracticeService: StudentPracticeService) {}

  ngOnInit(): void {
    this.fetchStudents();
  }

  switchTab(tab: 'tabla' | 'horas') {
    this.selectedTab = tab;
  }

  refresh() {
    this.loading = true;
    this.fetchStudents();
  }

  fetchStudents() {
    this.studentPracticeService.getStudentsPracticeStatus().subscribe({
      next: (res) => {
        this.students = res.data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching student data:', err);
        this.students = [];
        this.loading = false;
      }
    });
  }
}
