import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BuildingService {
  url = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  getAllBuildingsByProjectsId(idProject: number): any {
    return this.http.get(`${this.url}/buildings/${idProject}`);
  }
}
