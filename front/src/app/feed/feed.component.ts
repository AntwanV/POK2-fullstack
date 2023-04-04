import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Music } from '../models/music.model';
import { MusicService } from '../services/music.service';
import { DialogAddMusicComponent } from '../dialog-add-music/dialog-add-music.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  musics: Music[] = [];
  constructor(
    private musicService: MusicService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.musicService.getMusics().subscribe(
      (data) => this.musics = data
    )
  }

  openDialog(): void {
    this.dialog.open(DialogAddMusicComponent, {
      width: '550px',
    });

  }
}
