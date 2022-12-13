import { Circuit } from './circuit.model';

export class Races {
	constructor(
		public season: string,
		public round: string,
		public url: string,
		public raceName: string,
		public Circuit: Circuit,
		public date: string,
		public time: string
	) { }
}
