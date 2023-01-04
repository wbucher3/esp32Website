import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  async updateButton() {
    // console.log("making call on '" + environment.url + "update" + "'");
    return await this.http.get<number>(environment.url + "update");
  }
}
