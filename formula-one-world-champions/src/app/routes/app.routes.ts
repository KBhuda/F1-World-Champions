import { Routes } from '@angular/router';
import { TeamsComponent } from '../components/content/teams/teams.component';
import { TeamComponent } from '../components/content/teams/team/team.component';
import { DriversComponent } from '../components/content/drivers/drivers.component';
import { SeasonsComponent } from '../components/content/seasons/seasons.component';
import { CircuitsComponent } from '../components/content/circuits/circuits.component';
import { DriverComponent } from '../components/content/drivers/driver/driver.component';
import { SeasonComponent } from '../components/content/seasons/season/season.component';
import { SchedulesComponent } from '../components/content/schedules/schedules.component';
import { CircuitComponent } from '../components/content/circuits/circuit/circuit.component';
import { StandingsComponent } from '../components/content/standings/standings.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { RacesComponent } from '../components/content/races/races.component';
import { RaceComponent } from '../components/content/races/race/race.component';

export var appRoutes: Routes = [
	{ path: '', redirectTo: '/seasons', pathMatch: 'full' },
	{
		path: 'seasons', component: SeasonsComponent
	},
	{
		path: 'seasons/:id', component: SeasonComponent, children: [
			{
				path: 'races', component: RacesComponent, children: [
					// { path: ':id', component: RaceComponent }
				]
			}
		]
	},
	{ path: 'seasons/:id/races/:id', component: RaceComponent },
	{
		path: 'schedules', component: SchedulesComponent
	},
	{
		path: 'standings', component: StandingsComponent
	},
	{
		path: 'circuits', component: CircuitsComponent, children: [
			{ path: ':id', component: CircuitComponent }
		]
	},
	{
		path: 'drivers', component: DriversComponent, children: [
			{ path: ':id', component: DriverComponent }
		]
	},
	{
		path: 'teams', component: TeamsComponent, children: [
			{ path: ':id', component: TeamComponent }
		]
	},
	{ path: '404', component: NotFoundComponent },
	{ path: '**', redirectTo: '/404' }
];
