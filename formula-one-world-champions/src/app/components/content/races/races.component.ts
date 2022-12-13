import { Component, Input, OnDestroy, OnInit, TrackByFunction } from '@angular/core';
import { Races } from 'src/app/models/race.model';

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
