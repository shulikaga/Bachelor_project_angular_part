import { Component } from '@angular/core';

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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  tiles: Tile[] = [
    {title:"",text: '', cols: 1, rows: 1, color: 'transparent', routerLink: '/planer', src: '/../assets/home/planer.png'},
    {title:"",text: '', cols: 2, rows: 1, color: 'transparent' , routerLink: '/microlearnings', src: './../assets/home/microlearnings.png'},
    {title:"Das Steht An",text: 'TODO', cols: 2, rows: 2, color: 'transparent', routerLink: '/events', src: '/../assets/home/next_courses.svg'},
    // tslint:disable-next-line: max-line-length
    {title:"",text: '', cols: 1, rows: 1, color: 'transparent', routerLink: '/feedbacks', src: '/../assets/home/feedbacks.png'},
    {title:"",text: '', cols: 1, rows: 1, color: 'transparent', routerLink: '/chat', src: '/../assets//home/messenger.png'},
    // tslint:disable-next-line: max-line-length
    {title:"",text: '', cols: 1, rows: 1, color: 'transparent', routerLink: '/participants-list', src: '/../assets/home/participants_list.png'},
    {title:"",text: '', cols: 1, rows: 1, color: 'transparent', routerLink: '/logs', src: '/../assets//home/logs.png'},
    {title:"SCORE", text: '345', cols: 1, rows: 1, color: 'transparent', routerLink: '/score', src: '/../assets//home'}
  ];
}
