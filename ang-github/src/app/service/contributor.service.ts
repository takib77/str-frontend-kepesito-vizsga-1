import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contributor } from '../model/contributor';

@Injectable({
  providedIn: 'root'
})
export class ContributorService {

  apiURL: string = 'https://api.github.com/users';

  constructor(
    private http: HttpClient) { }

  getAllContributors(userName: string): Observable<Contributor[]> {
    return this.http.get<Contributor[]>(`${this.apiURL}/${userName}/repos`);
  }

  getContributor(id: number): Observable<Contributor> {
    return this.http.get<Contributor>(`${this.apiURL}/${id}`);
  }
}
