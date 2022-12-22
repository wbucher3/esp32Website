import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private service: ServiceService) {}

  
  async buttonClick() {
    console.log("making request...")
    let number = (await this.service.updateButton())
      .subscribe(res => res);
    console.log("Request Made!");
  }
}
