import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WarrantyTypeService {
  private URL = environment.url;

  constructor(private http: HttpClient) {}

  getAll(): any {
    return this.http.get(`${this.URL}/warrantyTypes`);
  }
}
