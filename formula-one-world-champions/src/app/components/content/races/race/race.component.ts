import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RaceService } from 'src/app/services/race/race.service';
import { SeasonService } from 'src/app/services/season/season.service';
import { DriverStandings } from 'src/app/models/driver-standings.model';
import { Races } from 'src/app/models/race.model';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';
import { Results } from 'src/app/models/results.model';

@Component({
	selector: 'app-race',
	templateUrl: './race.component.html',
	styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit, OnDestroy {
	@Input() seasonRace!: Races;
	seasonChampionID!: string;
	seasonRaceResult: Results;
	driverWinner: DriverStandings;
	private raceResultSubscription!: Subscription;
	private driverChampionSubscription!: Subscription;

	constructor(private raceSvc: RaceService,
		private seasonSvc: SeasonService,
		private route: ActivatedRoute,
		private router: Router) {
	}

	/**
	 *
	 */
	ngOnInit() {
		// Get season Races Winner info from Race service
		this.raceResultSubscription = this.raceSvc.getRaceWinner(this.seasonRace.season, this.seasonRace.round)
			.subscribe(seasonRaceResult => {
				this.seasonRaceResult = seasonRaceResult.MRData.RaceTable.Races[0].Results[0];
			});

		// Get season winning Driver info from Season service
		this.driverChampionSubscription = this.seasonSvc.getSeasonWinnerDriver(this.seasonRace.season)
			.subscribe(seasonDriverChamp => {
				this.driverWinner = seasonDriverChamp.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
				this.seasonChampionID = this.driverWinner?.Driver?.driverId;
			});
	}

	/**
	 *
	 */
	ngOnDestroy() {
		if (this.raceResultSubscription) {
			this.raceResultSubscription.unsubscribe();
		}

		if (this.driverChampionSubscription) {
			this.driverChampionSubscription.unsubscribe();
		}
	}
}
