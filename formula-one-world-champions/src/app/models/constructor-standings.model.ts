import { Constructor } from './constructor.model';

export class ConstructorStandings {
	constructor(
		public position: string,
		public positionText: string,
		public points: string,
		public wins: string,
		public Constructor: Constructor
	) { }
}
