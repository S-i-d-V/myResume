import { Component, OnInit } from '@angular/core';
import { TabsService } from 'src/app/services/tabs.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {

  constructor(public tabsService: TabsService) {
    //
  }

  ngOnInit(): void {
  }

}
