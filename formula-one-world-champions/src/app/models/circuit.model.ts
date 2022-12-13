export class Circuit {
	constructor(
		public circuitId: string,
		public url: string,
		public circuitName: string,
		public Location: Location
	) { }
}

export class Location {
	constructor(
		public lat: string,
		public long: string,
		public locality: string,
		public country: string
	) { }
}
