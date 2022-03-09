import { Component, OnInit } from '@angular/core';
import { WhileDirective } from './header.while.directive';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[WhileDirective]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  condition: boolean=true;
  toggle(){
      this.condition=!this.condition;
  }
}
