import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { ContactInfo } from '../../models/contactInfo.model';

@Injectable({
  providedIn: 'root',
})
export class ContactInfoService {
  private URL = environment.url;
  constructor(private http: HttpClient) {}

  // createContactForWarranty(client: ContactInfo): Observable<any> {
  //   return this.http.post(`${this.URL}/warranties`, client);
  // }

  createContactAfterSell(contacts: ContactInfo): Observable<any> {
    return this.http.post(`${this.URL}/contacts`, contacts);
  }
}
