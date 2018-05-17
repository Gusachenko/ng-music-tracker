import { Component, AfterViewInit } from '@angular/core';

import { GlobalStateService } from '../../services/global-state.service';
import { Song } from '../../interfaces/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  timeLineNumbers = new Array(24);
  songsList: Array<Song>;
  constructor(private globalStateService: GlobalStateService) {
    this.globalStateService.songsListSourceState.subscribe(songsList => {
      this.songsList = songsList;
    });
  }

  removeTrack(songId: number) {
    this.songsList.splice(this.songsList.findIndex( el => el.id === songId), 1);
    this.globalStateService.changeSongsListSourceState(this.songsList);
  }

  ngAfterViewInit() {}
}
