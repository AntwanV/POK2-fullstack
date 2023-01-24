import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Video } from '../models/search.interface';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-dialog-add-music',
  templateUrl: './dialog-add-music.component.html',
  styleUrls: ['./dialog-add-music.component.scss']
})
export class DialogAddMusicComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private musicService: MusicService,
  ) { }

  addMusicForm!: FormGroup;
  newMusicPreview$!: Observable<any>;
  
  selectedVideo: boolean = false;
  
  YtMusic: any = {};

  ngOnInit(): void {
    this.addMusicForm = this.formBuilder.group({
      title: [null, Validators.required],
      author: [null, Validators.required],
      genre: [null, Validators.required],
      description: [null, Validators.required]
    });
    this.newMusicPreview$ = this.addMusicForm.valueChanges;
  }

  onSubmit(){
    this.musicService.addMusic(this.addMusicForm.value).subscribe(
      data => {
        console.log(data)
      },
      err => {
        console.log('HTTP Error', err);
      }
    )
  }
  onSubmitYt(){
    this.musicService.addMusic(this.YtMusic).subscribe(
      data => {
        console.log(data)
      },
      err => {
        console.log('HTTP Error', err);
      }
    )
  }

  selectVideo(e: Video){
    this.selectedVideo = true;
    this.YtMusic.title = e.title
    this.YtMusic.author = e.channelTitle
    this.YtMusic.genre = ""
    this.YtMusic.description = e.description;
    console.log(this.YtMusic);

  }

}
