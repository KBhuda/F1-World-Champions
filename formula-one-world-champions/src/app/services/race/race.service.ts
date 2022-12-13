import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Results } from 'src/app/models/results.model';

@Injectable({
	providedIn: 'root'
})
export class RaceService {
	private baseUrl = 'http://ergast.com/api/f1';

	constructor(private http: HttpClient) { }

	getRaceWinner(seasonYear: string, raceNumber: string): Observable<any> {
		return this.http.get<Results[]>(`${this.baseUrl}/${seasonYear}/${raceNumber}/results/1.json`);
	}
}
