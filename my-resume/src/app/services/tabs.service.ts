import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Tab } from '../interfaces/tab';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  files: string[] = [
    "me.ts",
    "education.ts",
    "experience.ts",
    "skills.ts",
    "contact.ts"
  ];

  openedFiles: Tab[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    //
  }

  routeTo(fileName: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { tab: fileName },
    });
  }

  selectTab(fileName: string): void{
    this.openedFiles.forEach((file) => file.selected = false);
    let foundIndex = this.openedFiles.findIndex((file) => file.fileName === fileName);
    if (foundIndex != -1){
      this.openedFiles[foundIndex].selected = true;
      this.routeTo(fileName);
    }
    else
      this.openTab(fileName);
  }

  closeTab(fileName: string): void{
    let foundIndex = this.openedFiles.findIndex((file) => file.fileName === fileName);
    if (foundIndex != -1){
      if (this.openedFiles[foundIndex].selected == true){
        for (let file of this.openedFiles){
          if (file.selected === false){
            file.selected = true;
            break;
          }
        }
      }
      console.log('Removed : ', this.openedFiles.splice(foundIndex, 1));
    }
  }

  openTab(fileName: string): void{
    let foundIndex = this.openedFiles.findIndex((file) => file.fileName === fileName);
    if (foundIndex == -1){
      this.openedFiles.push(
        Object.assign({}, {
          fileName: fileName,
          selected: true,
        })
      );
      this.routeTo(fileName);
    }
  }

  getSelectedTab(): string{
    let foundIndex = this.openedFiles.findIndex((file) => file.selected === true);
    if (foundIndex != -1)
      return (this.openedFiles[foundIndex].fileName);
    return ('');
  }
}
