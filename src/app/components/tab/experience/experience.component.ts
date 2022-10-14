import { Component, OnInit } from '@angular/core';
import { TabsService } from 'src/app/services/tabs.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor(public tabsService: TabsService) { }

  ngOnInit(): void {
  }

}
