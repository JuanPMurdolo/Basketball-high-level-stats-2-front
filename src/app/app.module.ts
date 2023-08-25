import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTournamentComponent } from './tournament/add-tournament/add-tournament.component';
import { ViewTournamentComponent } from './tournament/view-tournament/view-tournament.component';
import { DeleteTeamComponent } from './team/delete-team/delete-team.component';
import { AddTeamComponent } from './team/add-team/add-team.component';
import { EditTeamComponent } from './team/edit-team/edit-team.component';
import { ViewTeamComponent } from './team/view-team/view-team.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTournamentComponent,
    ViewTournamentComponent,
    DeleteTeamComponent,
    AddTeamComponent,
    EditTeamComponent,
    ViewTeamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule // Agrega módulo HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
