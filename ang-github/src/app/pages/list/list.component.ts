import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Contributor } from 'src/app/model/contributor';
import { ContributorService } from 'src/app/service/contributor.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  contributors$: Observable<Contributor[]> = this.activatedRoute.params.pipe(
    switchMap(data => this.contributorservice.getAllContributors(data.name)));

  columnKey: string = '';
  direction: number = 1;

  constructor(
    private contributorservice: ContributorService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void { }

  onBack(): void {
    this.router.navigate(['']);
  }

  onColumnSelect(key: string): void {
    if (this.columnKey === key) {
      this.direction *= -1;
    } else {
      this.direction = 1;
    }
    this.columnKey = key;
  }

}
