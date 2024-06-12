import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-discussion',
  templateUrl: './group-discussion.component.html',
  styleUrl: './group-discussion.component.css'
})
export class GroupDiscussionComponent implements OnInit {
  message = "";
  ngOnInit(): void {
    this.message = `
    Its went never ending loop!!
    But i dont know where went wrog, here is the code.
    while(i<=n){
      if(i%2==0){
        print even number
      }else{
        print odd number
      }
    }
    `
  }


  numSequence(n: number): Array<number> {
    return Array(n);
  }

}
