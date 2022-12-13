import { Subscription } from 'rxjs';
import { Races } from 'src/app/models/race.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SeasonService } from 'src/app/services/season/season.service';
import { DriverStandings } from 'src/app/models/driver-standings.model';
import { ConstructorStandings } from 'src/app/models/constructor-standings.model';

@Component({
	selector: 'app-season',
	templateUrl: './season.component.html',
	styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit, OnDestroy {
	private seasonSubscription!: Subscription;
	private driverChampionSubscription!: Subscription;
	private constructorChampionSubscription!: Subscription;
	private selectedSeasonsRace!: Races;
	season: string = '2005';
	seasonsRaces!: Races[];
	driverWinner: DriverStandings;
	constructorWinner: ConstructorStandings;

	constructor(private seasonSvc: SeasonService,
		private router: Router,
		private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.route.params.subscribe(
			(params: Params) => {
				this.season = params['id'];
			}
		)

		// Get season Races info from Season service
		this.seasonSubscription = this.seasonSvc.getSeasonsRaces(this.season)
			.subscribe(seasonRaces => {
				this.seasonsRaces = seasonRaces.MRData.RaceTable.Races;
			});

		// Get season winning Driver info from Season service
		this.driverChampionSubscription = this.seasonSvc.getSeasonWinnerDriver(this.season)
			.subscribe(seasonDriverChamp => {
				this.driverWinner = seasonDriverChamp.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
				console.log(this.driverWinner?.Driver?.driverId);
			});

		// Get season winning Constructor info from Season service
		this.constructorChampionSubscription = this.seasonSvc.getSeasonWinnerConstructor(this.season)
			.subscribe(seasonDriverConstructor => {
				this.constructorWinner = seasonDriverConstructor.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[0];
			});
	}

	ngOnDestroy() {
		if (this.seasonSubscription) {
			this.seasonSubscription.unsubscribe();
		}

		if (this.driverChampionSubscription) {
			this.driverChampionSubscription.unsubscribe();
		}

		if (this.constructorChampionSubscription) {
			this.constructorChampionSubscription.unsubscribe();
		}
	}
}
