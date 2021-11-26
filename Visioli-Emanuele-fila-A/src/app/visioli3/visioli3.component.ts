import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visioli3',
  templateUrl: './visioli3.component.html',
  styleUrls: ['./visioli3.component.css']
})
export class Visioli3Component implements OnInit {
  terzo: string;
  constructor() { 
    this.terzo="terzo";
  }
  ngOnInit(): void {
  }

}
