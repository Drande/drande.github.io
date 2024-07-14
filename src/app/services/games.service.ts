import { Injectable, makeStateKey, StateKey, TransferState } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, tap } from 'rxjs';
import { Collection } from '../models/collection';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private apiKey: string;
  private apiBaseUrl: string;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly transferState: TransferState,
  ) {
    this.apiKey = environment.itchioApiSecret;
    this.apiBaseUrl = `https://itch.io/api/1/${this.apiKey}/`;
  }

  private get<T>(url: string) {
    const key: StateKey<T> = makeStateKey<T>(url);

    if (this.transferState.hasKey(key)) {
      const data = this.transferState.get(key, null);
      return of(data);
    } else {
      return this.httpClient.get<T>(url).pipe(
        tap(data => {
          this.transferState.set<T>(key, data);
        })
      );
    }
  }

  public getCollections(): Observable<{ collections: Collection[] }> {
    const url = this.apiBaseUrl + "my-collections";
    return this.get<{ collections: Collection[] }>(url).pipe(map(r => r ?? { collections: [] }));
  }
}
