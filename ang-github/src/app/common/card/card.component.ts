import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() avatar_url: string = '';
  @Input() login: string = '';
  @Input() contributions: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
