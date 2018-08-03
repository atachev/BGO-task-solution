import { Component, OnInit } from '@angular/core';
import { Card } from "../../models/card.model";
import { cards } from '../../data/card.data';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {
  cards: Card[];
  acceptedItems = 0;
  canceledItems = 0;
  areAllItemsVisible = false;

  constructor() {
    this.cards = cards;
  }

  acceptItem(item) {
    this.acceptedItems++;
    this.cards = this.cards.filter(card => card.id !== item.id);
  }

  cancelItem(item) {
    this.canceledItems++;
    this.cards = this.cards.filter(card => card.id !== item.id);
  }

  resetItems() {
    if (this.cards.length == cards.length) {
      this.areAllItemsVisible = true;
    }
    this.cards = cards;
    this.acceptedItems = 0;
    this.canceledItems = 0;
  }

  closeModal() {
    this.areAllItemsVisible = false;
  }
  
  ngOnInit() {
  }

}
