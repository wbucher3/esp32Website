import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }


  url = "http://websiteapi-env.eba-saps22nu.us-east-2.elasticbeanstalk.com/update"
  // localhost = "http://localhost:5000/update"

  async updateButton() {
    return await this.http.get<number>(this.url);
  }
}
