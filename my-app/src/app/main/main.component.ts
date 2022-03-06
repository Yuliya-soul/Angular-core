import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  ngOnInit(): void {
  }
  sectionName='Courses';
  clicks:number = 0;
  onChanged(increased:any){
      increased==true?this.clicks++:this.clicks--;
  }
}
