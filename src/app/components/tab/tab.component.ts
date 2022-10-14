import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TabsService } from 'src/app/services/tabs.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  private _queryParamsSubscription?: Subscription;

  constructor(public tabsService: TabsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this._queryParamsSubscription = this.route.queryParams.subscribe((params) => {
      this.tabsService.language = this.router.url.slice(1, 3);
      if ('select' in params) {
        const selected = params['select'];
        const selectedIndex = params['index'];
        const others = params['open'];
        this.tabsService.openedTabs = [];
        if (others != undefined){
          let index = 0;
          for (let tab of this.tabsService.parseQuery(others)){
            if (index == selectedIndex)
              this.tabsService.openTab(selected);
            if (tab.length != 0)
              this.tabsService.openTab(tab);
            index++;
          }
          this.tabsService.selectTab(selected);
        }
        else
          this.tabsService.selectTab(selected);
      }
      else
        this.tabsService.closeTab(this.tab);
    });
  }

  get tab() {
    return this.tabsService.getSelectedTab();
  }
}
