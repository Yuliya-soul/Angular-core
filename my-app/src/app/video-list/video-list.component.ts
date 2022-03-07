import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { videoDescription } from './mock.data';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  constructor() { }

@Input() section:string='';

@Output() onChanged = new EventEmitter<boolean>();
    change(increased:any) {
        this.onChanged.emit(increased);
    }
  ngOnInit(): void {
  }
  list=[1,2,3,4]
text=videoDescription[0]
}
