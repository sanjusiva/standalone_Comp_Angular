import { Component, OnInit } from '@angular/core';
import { BorderDirective } from 'src/app/directives/border.directive';
import { HighlightDirective } from 'src/app/directives/highlight.directive';

@Component({
  selector: 'app-user',
  standalone:true,
  imports:[HighlightDirective,BorderDirective],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
