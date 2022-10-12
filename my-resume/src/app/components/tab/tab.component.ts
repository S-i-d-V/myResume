import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TabsService } from 'src/app/services/tabs.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  private _queryParamsSubscription?: Subscription;

  constructor(public tabsService: TabsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._queryParamsSubscription = this.route.queryParams.subscribe((params) => {
      if ('tab' in params) {
        const selected = params['tab'];
        const others = params['opened']
        if (others != undefined){
          for (let tab of this.tabsService.parseQuery(others)){
            if (tab.length != 0)
              this.tabsService.openTab(tab);
          }
        }
        this.tabsService.selectTab(selected);
      }
      else
        this.tabsService.closeTab(this.tab);
      },
    );
  }

  get tab() {
    return this.tabsService.getSelectedTab();
  }
}
