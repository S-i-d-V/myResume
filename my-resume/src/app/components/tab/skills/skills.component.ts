import { Component, OnInit } from '@angular/core';
import { TabsService } from 'src/app/services/tabs.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(public tabsService: TabsService) { }

  ngOnInit(): void {
  }

}
