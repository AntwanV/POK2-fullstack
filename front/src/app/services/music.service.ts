import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Music } from "../models/music.model";

@Injectable({
    providedIn: 'root'
})
export class MusicService {
    
    configUrl = environment.apiUrl;

    constructor(
        private http: HttpClient,
    ) { }

    getMusics() {
        const route = `http://localhost:3000/api/musics`;
        return this.http.get<Music[]>(route);
    }

    addMusic(newMusic: Partial<Music>) {
        const route = `http://localhost:3000/api/newMusic`;
        return this.http.post<any>(route, newMusic);
    }

    addLike(musicId: string){
        const route = `http://localhost:3000/api/newLike`;
        console.log('servivce')
        return this.http.put<any>(route, musicId);
    }

    addDislike(musicId: string){
        const route = `http://localhost:3000/api/newDislike}`;
        return this.http.post<any>(route, musicId);
    }
}