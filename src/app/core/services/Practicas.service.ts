import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PracticasService {
  private apiUrl = environment.apiUrl.code5;

  constructor(private http: HttpClient) {}

  getStudentsWithPracticeStatus() {
    return this.http.get<any>(`${this.apiUrl}/api/ppp/setup/practices/status/student`);
  }
}