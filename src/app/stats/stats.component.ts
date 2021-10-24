import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ServiceStatsService } from "../service-stats.service";
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  playerId: Number;
  playerInfo: any;
  playerStats: any;
  playerAlltimeStats: any;

  constructor(private activatedRoute: ActivatedRoute, private statsService: ServiceStatsService ) { }

  ngOnInit(): void {
    this.playerId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.playerId);
    this.statsService.getInfo(this.playerId).subscribe((data) => {
      console.log(data);
      this.playerInfo = data;

      this.statsService.getStats(this.playerId).subscribe((dataStats) => {
        console.log(dataStats);
        this.playerStats = dataStats;
      })
    })
    this.statsService.getAlltimeStats(this.playerId).subscribe((dataAlltimeStats) => {
      console.log(dataAlltimeStats);
      this.playerAlltimeStats = dataAlltimeStats;
    })
  }

}
