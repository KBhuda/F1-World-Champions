import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Season, Seasons } from 'src/app/models/season.model';
import { SeasonService } from 'src/app/services/season/season.service';
import { Component, OnDestroy, OnInit, TrackByFunction } from '@angular/core';

@Component({
	selector: 'app-seasons',
	templateUrl: './seasons.component.html',
	styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit, OnDestroy {
	listOfSeasons!: Seasons[];
	trackByFn!: TrackByFunction<Season>;
	private seasonsSubscription!: Subscription;

	/**
	 *
	 */
	constructor(private seasonSvc: SeasonService,
		private router: Router,
		private route: ActivatedRoute) {
	}

	/**
	 *
	 */
	ngOnInit() {
		// Get season years info from Season service
		this.seasonsSubscription = this.seasonSvc.getSeasons()
			.subscribe((seasons) => {
				this.listOfSeasons = seasons.MRData.SeasonTable.Seasons;
			});
	}

	/**
	 *
	 */
	ngOnDestroy() {
		if (this.seasonsSubscription) {
			this.seasonsSubscription.unsubscribe();
		}
	}
}
