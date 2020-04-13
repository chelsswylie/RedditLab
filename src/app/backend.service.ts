import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private httpClient: HttpClient) {}
  get() {
    let url: string = 'https://www.reddit.com/r/aww/.json';
    return this.httpClient.get(url);
  }
}
