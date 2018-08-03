import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from "../../models/card.model";

@Component({
  selector: 'card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss']
})
export class CardComponentComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() image: string;
  @Input() description: string;
  @Output() acceptedItems = new EventEmitter<boolean>();
  @Output() canceledItems = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  acceptItem() {
    this.acceptedItems.emit(true);
  }
  cancelItem() {
    this.canceledItems.emit(true);
  }
}
