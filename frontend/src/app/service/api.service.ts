import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUri: string = 'http://localhost:4100/api/v1/vehicles';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getVehicles() {
    return this.http.get(this.baseUri);
  }

  getVehicle(id) {
    return this.http.get(`${this.baseUri}/${id}`);
  }


  getVehicleByName(name) {
    return this.http.get(`${this.baseUri}/find?q=${name}`);
  }

  addVehicle(vehicle) {
    return this.http.post(this.baseUri, vehicle);
  }

  updateVehicle(id, vehicle) {
    return this.http.put(`${this.baseUri}/${id}`, vehicle);
  }
}
