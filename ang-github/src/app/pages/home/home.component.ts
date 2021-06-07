import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  page: number = 1;
  userCards: Observable<User[]> = this.userservice.getAll(this.page);

  scrollEvent = fromEvent(window, 'scroll').subscribe(event => {
    const isBottom = document.body.offsetHeight - window.scrollY - 500 < 500;
    if (isBottom) {
      this.page++;
      this.userCards = this.userservice.getAll(this.page);
    }
  });

  constructor(
    private userservice: UserService
  ) { }

  ngOnInit(): void {
  }

}
