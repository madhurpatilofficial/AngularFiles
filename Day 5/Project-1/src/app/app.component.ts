import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project-1';
  username = "Madhur Patil"
  amount = 15000;
  birthdate = new Date()
  str: string = 'abcdefghij';

  jsonval = { name: 'Rox', age: '25', address: { a1: 'Mumbai', a2: 'Karnataka' } };
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

  pi: number = 3.14;
  e: number = 2.718281828459045;

  power = 5;
  factor = "1";
}
