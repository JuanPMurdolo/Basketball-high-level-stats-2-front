import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTournamentComponent } from './tournament/add-tournament/add-tournament.component';
import { AddTeamComponent } from './team/add-team/add-team.component';

const routes: Routes = [
  { path: 'tournament/add', component: AddTournamentComponent },
  { path: 'AddTeam', component: AddTeamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
