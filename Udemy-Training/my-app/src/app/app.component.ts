import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = ""
  clearName() {
    this.name = "";
  }

  showSecret = false;
  login = [];

  onToggle() {
    this.showSecret = !this.showSecret;
    // this.login.push(this.login.length + 1);
    this.login.push(new Date());
  }
  

}
