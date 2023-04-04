import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../models/search.interface';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {

  @Input() videos: Video[];

  @Output() selectVideoEvent = new EventEmitter<Video>();

  constructor() { }

  ngOnInit() {
  }

  selectVideo(video: Video){
    this.selectVideoEvent.emit(video);
  }
}