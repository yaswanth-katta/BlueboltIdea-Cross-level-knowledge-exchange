import { Component } from '@angular/core';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.css'
})
export class ConversationComponent {
  numSequence(n: number): Array<number> { 
    return Array(n); 
  } 
}

