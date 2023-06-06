import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from 'src/app/models/api.interface';
import { RequestService } from 'src/app/service/request.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  newCard: {
    title: string;
    url: string;
    thumbnailUrl: string;
  } = {
    title: '',
    url: '',
    thumbnailUrl: '',
  };

  cards: Api[] = [];
  sub!: Subscription;

  constructor(private http: HttpClient, private requestSrv: RequestService) {}

  ngOnInit(): void {
    this.getCards();
  }
  getCards() {
    this.sub = this.requestSrv.getRequest().subscribe((card) => {
      console.log(card);
      this.cards = card;
    });
  }
}

