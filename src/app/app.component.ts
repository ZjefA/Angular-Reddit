import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AuthenticationService} from "./user/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private authService: AuthenticationService){}

  ngOnInit(): void {
  }

  get currentUser(): Observable<string> {
    return this.authService.user$;
  }
}
