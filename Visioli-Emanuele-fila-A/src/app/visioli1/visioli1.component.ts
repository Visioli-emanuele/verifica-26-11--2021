import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visioli1',
  templateUrl: './visioli1.component.html',
  styleUrls: ['./visioli1.component.css']
})
export class Visioli1Component implements OnInit {
secondo: string;
  constructor() {
    this.secondo="secondo";
   }

  ngOnInit(): void {
  }

}
