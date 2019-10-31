import { Component, OnInit } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  title: string;
  text: string;
  routerLink: string;
  src: string;
}
@Component({
  selector: 'app-microlearnings',
  templateUrl: './microlearnings.component.html',
  styleUrls: ['./microlearnings.component.scss']
})
export class MicrolearningsComponent implements OnInit {
  tiles: Tile[] = [
    {title:"",text: '', cols: 1, rows: 1, color: 'transparent', routerLink: '/microlearnings/quiz', src: '/../assets/home/planer.png'},
    {title:"",text: '', cols: 1, rows: 1, color: 'transparent' , routerLink: '/microlearnings/quiz', src: './../assets/home/microlearnings.png'},
    {title:"Das Steht An",text: 'TODO', cols: 1, rows: 1, color: 'transparent', routerLink: '/microlearnings/quiz', src: '/../assets/home/next_courses.svg'},
    // tslint:disable-next-line: max-line-length
    {title:"",text: '', cols: 1, rows: 1, color: 'transparent', routerLink: '/microlearnings/quiz', src: '/../assets/home/feedbacks.png'}
    ];
  constructor() { }

  ngOnInit() {
  }

}
