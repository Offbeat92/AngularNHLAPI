import { Component, OnInit } from '@angular/core';
import { ServiceStatsService } from "../service-stats.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private statsService: ServiceStatsService) { }

  ngOnInit(): void {
  }

}
