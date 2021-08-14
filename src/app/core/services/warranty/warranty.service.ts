import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { WarrantyModel } from '../../models/warranty.model';

@Injectable({
  providedIn: 'root',
})
export class WarrantyService {
  private URL = environment.url;

  constructor(private http: HttpClient) {}

  createContactAfterSell(client: WarrantyModel): Observable<any> {
    return this.http.post(`${this.URL}/contacts`, client);
  }

  createWarranty(warranty: WarrantyModel): Observable<any> {
    return this.http.post(`${this.URL}/warranties`, warranty);
  }
}
