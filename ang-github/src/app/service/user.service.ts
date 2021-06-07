import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User> {

  apiURL: string = 'https://api.github.com/repos/angular/angular/contributors?page=1&per_page=25';

  constructor(
    public http: HttpClient) {
    super(http);
    this.entity = 'repos/angular/angular/contributors?page=1&per_page=25';
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiURL}/${id}`);
  }

}
