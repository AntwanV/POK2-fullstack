import { Component, OnInit, Input } from '@angular/core';
import { Music } from '../models/music.model';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.scss']
})
export class MusicCardComponent implements OnInit {

  @Input() music: Music;

  constructor(
    private musicService: MusicService
  ) { }

  ngOnInit(): void {
  }

  addLike(){
    this.musicService.addLike(this.music?._id);
  }

  addDislike(){
    this.musicService.addDislike(this.music?._id)
  }

}
