import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class CattleService {
    private _url = 'assets/data.json';
    constructor(private httpClient: HttpClient) { }

    getContentJSON() {
        return this.httpClient.get("assets/data.json");
      }
}
