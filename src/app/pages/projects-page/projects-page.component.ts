import { Component } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { combineLatestWith, filter, map, Observable } from 'rxjs';
import { AsyncPipe, DatePipe, JsonPipe, NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { CompleteCollection } from '../../models/collection';
import { TabViewModule } from 'primeng/tabview';
import { Game, GameBase } from '../../models/game';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { PrimeIcons } from 'primeng/api';
import { BadgeSeverity } from '../../models/badge-severity';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [NgIf, NgFor, JsonPipe, AsyncPipe, DatePipe, TitleCasePipe, TabViewModule, ButtonModule, BadgeModule, SectionTitleComponent],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss'
})
export class ProjectsPageComponent {
  viewIcon: string = PrimeIcons.EYE;
  collections?: Observable<CompleteCollection[]>;
  descriptionMap: Record<number, string> = {
    [2822685]: "A video game created during the 1 Day Game Jam at Generation Colombia!"
  }

  contributionsMap: Record<number, string[]> = {
    [2822685]: [ // Black-And-White
      "Movement and animations",
      "Scripting",
      "Game design",
      "Gameplay interactions",
    ],
  }
  
  skillsAppliedMap: Record<number, string[]> = {
    [2848838]: [
      "Augmented reality", "Physics"
    ],
    [2794044]: [ // Unity challenge 1
      "Physics", "Player Control"
    ],
    [2794180]: [ // Unity challenge 2
      "Object Pooling", "Object Spawn"
    ],
    [2794420]: [ // Unity challenge 3
      "Music and Sfx", "Animations"
    ],
    [2794490]: [ // Unity challenge 4
      "Power ups", "Player skills"
    ],
  }

  stateMap: Record<number, string> = {
    [2822685]: "Development",
    [2794044]: "Completed",
    [2794180]: "Completed",
    [2794420]: "Completed",
    [2794490]: "Completed",
  }

  severityPerState: Record<string, BadgeSeverity> = {
    "Development": "primary",
    "Completed": "success",
  }

  constructor(
    private readonly gamesService: GamesService,
  ) {
    const games = this.gamesService.getGames().pipe(map(r => r.games));
    const collections = this.gamesService.getCollections().pipe(map(r => r.collections));
    this.collections = games.pipe(combineLatestWith(collections))
    .pipe(
      filter(([g,c]) => g != null && c != null),
      map(([myGames, collections]) => {
      return collections.map(c => {
        const games = myGames.filter(g => c.games.some(mg => mg.id === g.id));
        return {
          ...c,
          games: games.map(g => {
            const tags = [{ label: g.type, severity: "primary" }, { label: g.classification, severity: "success" }] as Game["tags"];
            g.p_android ? tags?.push({ label: "Android", severity: "success" }) : null;
            return {
              ...g,
              tags,
            } satisfies Game;
          })
        };
      }).filter(c => c.games.length > 0);
    }));
  }

  handleCardClick(game: GameBase) {
    window.open(game.url, "_blank");
  }
}
