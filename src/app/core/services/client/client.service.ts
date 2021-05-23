import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { ClientModel } from './../../models/client.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private URL = environment.url;

  constructor(private http: HttpClient) {}

  createClient(client: ClientModel): Observable<any> {
    return this.http.post(`${this.URL}/clients`, client);
  }
}
