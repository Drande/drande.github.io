import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GamesService } from './services/games.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  subscription: Subscription;

  constructor(
    private gamesService: GamesService,
  ) {
    // Cache SSR Results.
    this.subscription = this.gamesService.getCollections().subscribe(() => {
      this.subscription?.unsubscribe();
    });
  }
}
