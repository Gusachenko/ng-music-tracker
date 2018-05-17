import { Component } from '@angular/core';

import { GlobalStateService } from './services/global-state.service';
// import { Song } from './interfaces/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GlobalStateService]
})
export class AppComponent {
  constructor(private globalStateService: GlobalStateService) {}

  addNewSong() {
    this.globalStateService.addNewSongToList();
  }
}
