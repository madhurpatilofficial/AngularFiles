
import { Component, OnInit } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  id:any;
 
  book:any;

  constructor(private _Activatedroute:ActivatedRoute){
    console.log("BookComponent")
     this._Activatedroute.params.subscribe(params => { 
      console.log(params)
        this.id = params['id']; 
        console.log(this.id)
    });

   }

  ngOnInit(): void {
   
  }

  
}