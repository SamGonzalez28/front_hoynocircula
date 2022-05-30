import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_BASE = 'http://localhost:8080';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${API_BASE}/auto`);
  }

  getAllRes() {
    return this.http.get(`${API_BASE}/circula`);
  }



  update(id: string, restriccion: any) {
    return this.http.put(`${API_BASE}/auto/${id}`, restriccion);
  }

   delete(id: string) {
     return this.http.delete(`${API_BASE}/auto/${id}`);
   }

  //auto
  createAuto(auto: any) {
    return this.http.post(`${API_BASE}/auto`, auto);
  }

  buscarAuto(buscar: any) {
    return this.http.post(`${API_BASE}/auto/buscar`, buscar );
  }
}
