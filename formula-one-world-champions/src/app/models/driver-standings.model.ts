import { Driver } from './driver.model';
import { Constructor } from './constructor.model';

export class DriverStandings {
	constructor(
		public position: string,
		public positionText: string,
		public points: string,
		public wins: string,
		public Driver: Driver,
		public Constructors: Constructor[]
	) { }
}
