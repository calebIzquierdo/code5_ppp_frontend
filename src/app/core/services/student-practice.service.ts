import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentPracticeStatus } from '../../shared/interfaces/student-practice.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentPracticeService {
  private baseUrl = `${environment.apiUrl.code5}/api/ppp/setup`;

  constructor(private http: HttpClient) {}

  getStudentsPracticeStatus(): Observable<{ success: boolean; data: StudentPracticeStatus[]; message: string }> {
    return this.http.get<{ success: boolean; data: StudentPracticeStatus[]; message: string }>(
      `${this.baseUrl}/practices/status/student`
    );
  }
}
