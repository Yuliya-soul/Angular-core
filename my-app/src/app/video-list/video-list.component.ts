import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { videoDescription } from './mock.data';
import { VideoListService } from './video-list.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
})
export class VideoListComponent implements OnInit {
  constructor(public videoService: VideoListService) {}

  @Input() section: string = '';

  @Output() onChanged = new EventEmitter<boolean>();
  change(increased: any) {
    this.onChanged.emit(increased);
  }
  ngOnInit(): void {}
  list = [1, 2, 3, 4];
  text = videoDescription[0];
  addItem(value:any) {
    this.list.push(this.videoService.addItem(value));
  }
}
