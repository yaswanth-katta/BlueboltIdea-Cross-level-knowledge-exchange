import { Component } from '@angular/core';

@Component({
  selector: 'app-associates',
  templateUrl: './associates.component.html',
  styleUrl: './associates.component.css'
})
export class AssociatesComponent {
    Arr = Array; // to iterated the stars
    numSequence(n: number): Array<number> { 
      return Array(n); 
    } 
}
