import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  url = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  getAllProjects(): any {
    return this.http.get(`${this.url}/projects`);
  }
}
