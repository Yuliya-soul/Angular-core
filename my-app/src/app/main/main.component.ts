import {  AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { VideoListComponent } from '../video-list/video-list.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit,AfterViewInit {
  @ViewChild(VideoListComponent, { static: false })
  videoList!: VideoListComponent;

  @ViewChild('pRef', { static: false })
  pRef!: ElementRef;

 
  ngOnInit(): void {
  }
  ngAfterViewInit() { 
    console.log('Here we get child props ', this.videoList.section); 
    console.log(this.pRef.nativeElement.innerHTML); 
   this.pRef.nativeElement.innerHTML = "Courses list"; 
  }
  sectionName='Courses';
  clicks:number = 0;
  onChangeParent(increased:any){
      increased==true?this.clicks++:this.clicks--;
  }
}
