import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes/app.routes';

import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeamsComponent } from './components/content/teams/teams.component';
import { RacesComponent } from './components/content/races/races.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TeamComponent } from './components/content/teams/team/team.component';
import { RaceComponent } from './components/content/races/race/race.component';
import { DriversComponent } from './components/content/drivers/drivers.component';
import { SeasonsComponent } from './components/content/seasons/seasons.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { CircuitsComponent } from './components/content/circuits/circuits.component';
import { DriverComponent } from './components/content/drivers/driver/driver.component';
import { SeasonComponent } from './components/content/seasons/season/season.component';
import { SchedulesComponent } from './components/content/schedules/schedules.component';
import { StandingsComponent } from './components/content/standings/standings.component';
import { CircuitComponent } from './components/content/circuits/circuit/circuit.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		NotFoundComponent,
		ComingSoonComponent,
		DriversComponent,
		DriverComponent,
		SeasonsComponent,
		TeamsComponent,
		TeamComponent,
		SeasonComponent,
		CircuitsComponent,
		CircuitComponent,
		SchedulesComponent,
		StandingsComponent,
		RacesComponent,
		RaceComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		RouterModule.forRoot(appRoutes)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
