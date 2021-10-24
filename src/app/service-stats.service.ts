import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ServiceStatsService {

  constructor(private http: HttpClient) { }

  getPlayers() {
    console.log('getPlayers()');
    return this.http.get('./assets/swedes.json');
  }

  getInfo(playerId: Number) {
    return this.http.get('https://statsapi.web.nhl.com/api/v1/people/' + playerId);
  }

  getStats(playerId: Number) {
    return this.http.get('https://statsapi.web.nhl.com/api/v1/people/' + playerId + '/stats?stats=statsSingleSeason&season=20192020');
}

  getAlltimeStats(playerId: Number) {
  return this.http.get('https://statsapi.web.nhl.com/api/v1/people/' + playerId + '/stats/?stats=careerRegularSeason');
}

  getStandings() {
    return this.http.get('http://statsapi.web.nhl.com/api/v1/standings?season=20192020');
  }

  playSound(){
    let sound = new Audio();
    sound.src = "./assets/skate.mp3";
    sound.load();
    sound.play();
  }

}
