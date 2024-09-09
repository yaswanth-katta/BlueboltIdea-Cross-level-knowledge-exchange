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
    But i dont know where went wrong, here is the code.
    int i=2,n=10;
    while(i<=n){
      if(i%2==0){
        printf("Even number");
      }else{
        printf("Odd number);
      }
    }
    `
  }


  numSequence(n: number): Array<number> {
    return Array(n);
  }

}
