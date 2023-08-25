import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../../models/team.model';
import { environment } from '../../config';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit{
  teams: Team[] = [];
  selectedTeam: Team | null = null;
  newTeam: Team = {
    id: '',
    name: '',
    abbreviation: '',
    city: '',
    conference: '',
    division: ''
  };
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadTeams();
  }

  loadTeams() {
    this.http.get<Team[]>(environment.apiUrl)
      .subscribe(teams => this.teams = teams);
  }

  addTeam() {
    this.http.post<Team>(environment.apiUrl, this.newTeam)
      .subscribe(newTeam => {
        this.teams.push(newTeam);
        this.newTeam = {
          id: '',
          name: '',
          abbreviation: '',
          city: '',
          conference: '',
          division: ''
        };
      });
  }
}
