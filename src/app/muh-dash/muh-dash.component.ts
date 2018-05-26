import { Component } from '@angular/core';

@Component({
  selector: 'muh-dash',
  templateUrl: './muh-dash.component.html',
  styleUrls: ['./muh-dash.component.css']
})
export class MuhDashComponent {
  cards = [
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];
}
