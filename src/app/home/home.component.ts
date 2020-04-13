import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  post: any;
  constructor(private backendService: BackendService) {}
  ngOnInit() {
    this.backendService.get().subscribe((ret: any) => {
      this.post = ret.data.children;
      console.log(this.post);
    });
  }
}
