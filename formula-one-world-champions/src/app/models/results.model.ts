import { Constructor } from './constructor.model';
import { Driver } from './driver.model';

export class Results {
	constructor(
		public number: string,
		public position: string,
		public positionText: string,
		public points: string,
		public Driver: Driver,
		public Constructor: Constructor,
		public grid: string,
		public laps: string,
		public status: string,
		public Time: Time,
		public FastestLap: FastestLap
	) { }
}

export class Time {
	constructor(
		public millis: string,
		public time: string
	) { }
}

export class FastestLap {
	constructor(
		public rank: string,
		public lap: string,
		public Time: Time,
		public AverageSpeed: AverageSpeed
	) { }
}

export class AverageSpeed {
	constructor(
		public units: string,
		public speed: string
	) { }
}
