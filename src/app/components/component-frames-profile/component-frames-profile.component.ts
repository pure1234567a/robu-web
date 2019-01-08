import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
export interface Frame {
  id: string;
  image: string;
}
@Component({
  selector: 'app-component-frames-profile',
  templateUrl: './component-frames-profile.component.html',
  styleUrls: ['./component-frames-profile.component.css']
})
export class ComponentFramesProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  image: Frame[] = [
    {id:"1",image:"./assets/img/frame-0.png"},
    {id:"2",image:"./assets/img/frame-1.png"},
    {id:"3",image:"./assets/img/frame-2.png"},
    {id:"4",image:"./assets/img/frame-3.png"},
    {id:"5",image:"./assets/img/frame-1.png"},
    {id:"6",image:"./assets/img/frame-2.png"},
    {id:"7",image:"./assets/img/frame-3.png"},

  ]

  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

}
