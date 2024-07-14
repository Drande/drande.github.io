import { Component } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { map, Observable } from 'rxjs';
import { AsyncPipe, DatePipe, JsonPipe, NgFor, TitleCasePipe } from '@angular/common';
import { Collection } from '../../models/collection';
import { TabViewModule } from 'primeng/tabview';
import { GameBase } from '../../models/game';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';

@Component({
  selector: 'app-proyects-page',
  standalone: true,
  imports: [NgFor, JsonPipe, AsyncPipe, DatePipe, TitleCasePipe, TabViewModule, ButtonModule, BadgeModule, SectionTitleComponent],
  templateUrl: './proyects-page.component.html',
  styleUrl: './proyects-page.component.scss'
})
export class ProyectsPageComponent {
  collections?: Observable<Collection[]>;
  descriptionMap: Record<number, string> = {
    [2822685]: `A videogame created during my first Game Jam at Generation Colombia! My role in this proyect was mainly focused on Scripting for most gameplay interactions.
    I created the scripts for scene navigation, player movement, animations, sound effects and background music and contributed to the game design.`
  }

  constructor(
    private readonly gamesService: GamesService,
  ) {
    this.collections = this.gamesService.getCollections().pipe(map(r => r.collections)).pipe(map(collections => {
      return collections.map(c => {
        c.games.map(g => {
          g.tags = [{ label: g.type, severity: "primary" }, { label: g.classification, severity: "success" }];
        });
        return c;
      });
    }));
  }

  handleCardClick(game: GameBase) {
    window.open(game.url, "_blank");
  }
}
