import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AparmentService {
  url = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  getAllBuildingsByProjectsId(idProject: number): any {
    console.log(idProject);
    return this.http.get(`${this.url}/apartments/${idProject}`);
  }
}
