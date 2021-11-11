import { Component } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 21000;

  userObject = {
    name: 'Jenny Lee Andes',
    age: '22',
    id: 1
  }

  constructor(private http: HttpService) {}

  handleEvent(event: any) {
    console.log(event);
    
  }
}
