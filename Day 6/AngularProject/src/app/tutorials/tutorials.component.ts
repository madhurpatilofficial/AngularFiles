import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as data from 'src/Model/tutorials.json';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent implements OnInit {


    tutorials: any = (data as any).default;


    constructor() {
      console.log(this.tutorials);

  }  ngOnInit(): void {
      throw new Error('Method not implemented.');
    }


}