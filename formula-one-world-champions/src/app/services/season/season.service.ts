import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Races } from '../../models/race.model';
import { HttpClient } from '@angular/common/http';
import { Seasons } from '../../models/season.model';

@Injectable({
    providedIn: 'root'
})
export class SeasonService {
    private baseUrl = 'http://ergast.com/api/f1';

    constructor(private http: HttpClient) { }

    getSeasons(): Observable<any> {
        /**
         * Get seasons info from Season service from 2005 until latest season
         * offset = 55 as 1950 was the first season
         */
        return this.http.get(`${this.baseUrl}/seasons.json?offset=55`);
    }

    getSeason(seasonYear: string): Observable<any> {
        return this.http.get<Seasons>(`${this.baseUrl}/${seasonYear}.json`);
    }

    getSeasonsRaces(seasonYear: string): Observable<any> {
        return this.http.get<Races[]>(`${this.baseUrl}/${seasonYear}.json`);
    }

    getSeasonWinnerDriver(seasonYear: string): Observable<any> {
        //Get position 1/winner of the driver standings at season end
        return this.http.get(`${this.baseUrl}/${seasonYear}/driverStandings/1.json`);
    }

    getSeasonWinnerConstructor(seasonYear: string): Observable<any> {
        //Get position 1/winner of the constructor standings at season end
        return this.http.get(`${this.baseUrl}/${seasonYear}/constructorStandings/1.json`);
    }
}
