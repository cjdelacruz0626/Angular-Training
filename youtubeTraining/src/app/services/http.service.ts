
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  getRequest() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((response) => {
      console.log(response);
    })
  }
}
