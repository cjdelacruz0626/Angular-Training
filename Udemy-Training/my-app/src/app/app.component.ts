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

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onToggle() {
    this.showSecret = !this.showSecret;
    // this.login.push(this.login.length + 1);
    this.login.push(new Date());
  }

  onIntervalFired(firedNumber: number) {
    if(firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
    
  }
  

}
