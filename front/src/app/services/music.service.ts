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
        const route = `http://node.origan.ovh1.ec-m.fr:8080/api/musics`;
        return this.http.get<Music[]>(route);
    }

    addMusic(newMusic: Partial<Music>) {
        const route = `http://node.origan.ovh1.ec-m.fr:8080/api/newMusic`;
        return this.http.post<any>(route, newMusic);
    }
}