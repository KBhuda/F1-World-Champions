import { Races } from 'src/app/models/race.model';
import { Component, Input, OnDestroy, OnInit, TrackByFunction } from '@angular/core';

@Component({
	selector: 'app-races',
	templateUrl: './races.component.html',
	styleUrls: ['./races.component.scss']
})
export class RacesComponent implements OnInit, OnDestroy {
	@Input() seasonsRaces!: Races[];
	trackByFn!: TrackByFunction<Races>;

	/**
	 *
	 */
	constructor() {
	}

	/**
	 *
	 */
	ngOnInit() {
	}

	/**
	 *
	 */
	ngOnDestroy() {
	}
}
