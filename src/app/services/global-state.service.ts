import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Song } from '../interfaces/common';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {
  private songsList = [] as Array<Song>;
  private songsListSource = new Subject<Array<Song>>();

  public songsListSourceState = this.songsListSource.asObservable();

  public changeSongsListSourceState(songsList: Array<Song>) {
    this.songsList = songsList;
    this.songsListSource.next(songsList);
  }

  public addNewSongToList(song: Song = null){
    this.songsList.push({ id: new Date().getTime(), name: `Track ${this.songsList.length}` });
    this.changeSongsListSourceState(this.songsList);
  }

  constructor() {}
}
