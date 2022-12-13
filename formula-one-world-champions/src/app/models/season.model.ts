import { Races } from './race.model';

export class Season {
	constructor(
		public season: string,
		public races: Races[]
	) { }
}

export class Seasons {
	constructor(
		public season: string,
		public url: string
	) { }
}
