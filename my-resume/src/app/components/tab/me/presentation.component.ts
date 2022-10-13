import { Component, OnInit } from '@angular/core';
import { TabsService } from 'src/app/services/tabs.service';

@Component({
  selector: 'app-me',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class MeComponent implements OnInit {

  constructor(public tabsService: TabsService) { }

  ngOnInit(): void {
  }

}
