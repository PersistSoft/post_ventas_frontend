import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { ApartmentAnswerValidatonModel } from './../../models/aparment.model';

@Injectable({
  providedIn: 'root',
})
export class AparmentService {
  private URL = environment.url;
  constructor(private http: HttpClient) {}

  getAllBuildingsByProjectsId(idProject: number): any {
    return this.http.get(`${this.URL}/apartments/${idProject}`);
  }

  validateAparment(id: number, key: string): any {
    return this.http
      .post<ApartmentAnswerValidatonModel>(`${this.URL}/apartments/validate`, {
        appartmentId: id,
        appartmentKey: key,
      })
      .toPromise()
      .then((res) => {
        if (res.appartmentKey) {
          return null;
        }
      })
      .catch((err) => {
        return { not_available: true };
      });
  }
}
