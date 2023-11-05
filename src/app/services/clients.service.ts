import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Client } from '../interfaces/client.intreface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private readonly baseUrl: string = environment.baseUrl;
  private _http = inject(HttpClient);

  constructor() {}

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token,
      },
    };
  }

  createClient(formData: Client) {
    return this._http
      .post(`${this.baseUrl}/clients`, formData, this.headers)
      .pipe(
        map((resp: any) => {
          return resp;
        })
      );
  }

  getClientById(_id: string) {
    return this._http
      .get(`${this.baseUrl}/clients/${_id}`, this.headers)
      .pipe(map((resp: any) => resp.client));
  }

  updateClient(formData: any, _id: string) {
    return this._http
      .put(`${this.baseUrl}/clients/${_id}`, formData, this.headers)
      .pipe(
        map((resp: any) => {
          return resp.client;
        })
      );
  }

  getClients() {
    return this._http.get(`${this.baseUrl}/clients`, this.headers).pipe(
      map((resp: any) => {
        return resp;
      })
    );
  }

  deleteClient(id: string) {
    return this._http.delete(`${this.baseUrl}/clients/${id}`, this.headers);
  }
}
