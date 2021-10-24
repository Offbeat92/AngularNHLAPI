import { Component, OnInit } from '@angular/core';
import { ServiceStatsService } from "../service-stats.service";


@Component({
  selector: 'app-activeswedes',
  templateUrl: './activeswedes.component.html',
  styleUrls: ['./activeswedes.component.css']
})
export class ActiveswedesComponent implements OnInit {

  arrPlayers: any = [];
  arrStandings: any;
  

  constructor(private statsService: ServiceStatsService) { }

  ngOnInit(): void {
    this.statsService.getPlayers().subscribe((data) => {
      this.arrPlayers = data;
    });

    this.statsService.playSound();
  }

}
