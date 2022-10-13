import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tab } from '../interfaces/tab';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  language: string = '';

  tabs: string[] = [
    "presentation.ts",
    "education.ts",
    "experience.ts",
    "skills.ts",
    "contact.ts"
  ];

  openedTabs: Tab[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.language = this.router.url.slice(1, 3);
  }

  routeTo(tabName: string, opts?: { open?: string}) {
    if (this.openedTabs.length != 1){
      this.router.navigate([this.language], {
        relativeTo: this.route,
        queryParams: { select: tabName , index: this.getSelectedIndex(), ...opts},
      });
    }
    else {
      this.router.navigate([this.language], {
        relativeTo: this.route,
        queryParams: { select: tabName },
      });
    }
  }

  selectTab(tabName: string): void{
    this.openedTabs.forEach((file) => file.selected = false);
    let foundIndex = this.openedTabs.findIndex((file) => file.tabName === tabName);
    if (foundIndex != -1){
      this.openedTabs[foundIndex].selected = true;
      this.routeTo(tabName, { open: this.getOpenedTabs() });
    }
    else
      this.openTab(tabName);
  }

  closeTab(tabName: string): void{
    let foundIndex = this.openedTabs.findIndex((file) => file.tabName === tabName);
    if (foundIndex != -1){
      if (this.openedTabs[foundIndex].selected == true){
        this.openedTabs.splice(foundIndex, 1);
        for (let file of this.openedTabs){
          if (file.selected === false){
            file.selected = true;
            break;
          }
        }
      }
      else {
        this.openedTabs.splice(foundIndex, 1);
      }
      if (this.getSelectedTab() != ''){
        if (this.openedTabs.length == 1)
          this.routeTo(this.getSelectedTab());
        else
          this.routeTo(this.getSelectedTab(), { open: this.getOpenedTabs() });
      }
      else
        this.router.navigate([], {relativeTo: this.route});
    }
  }

  openTab(tabName: string): void{
    let foundIndex = this.openedTabs.findIndex((file) => file.tabName === tabName);
    if (foundIndex == -1){
      this.openedTabs.push(
        Object.assign({}, {
          tabName: tabName,
          selected: true,
        })
      );
      if (this.openedTabs.length == 1)
        this.routeTo(tabName);
      else
        this.routeTo(tabName, { open: this.getOpenedTabs() });
    }
  }

  getSelectedTab(): string{
    let foundIndex = this.openedTabs.findIndex((file) => file.selected === true);
    if (foundIndex != -1)
      return (this.openedTabs[foundIndex].tabName);
    return ('');
  }

  getSelectedIndex(): number{
    let selectedIndex = 0;
    for (let tab of this.openedTabs){
      if (tab.selected == true)
        break;
      selectedIndex++;
    }
    return (selectedIndex);
  }

  getOpenedTabs(): string{
    let openedTabs: string = '';
    if (this.openedTabs.length != 0){
      const filteredTabs = this.openedTabs.filter((tab) => tab.selected == false);
      filteredTabs.forEach((tab, index) => {
        if (tab.selected == false){
          openedTabs += tab.tabName;
          if (index < filteredTabs.length - 1)
            openedTabs += '+';
        }
      });

    }
    return (openedTabs);
  }

  parseQuery(query: string): string[]{
    return (query.split('+'));
  }

  switchLanguage(){
    if (this.language == 'fr'){
      this.language = 'en';
      this.routeTo(this.getSelectedTab(), { open: this.getOpenedTabs() });
    }
    else{
      this.language = 'fr';
      this.routeTo(this.getSelectedTab(), { open: this.getOpenedTabs() });
    }
  }
}
