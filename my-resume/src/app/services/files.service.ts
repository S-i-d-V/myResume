import { Injectable } from '@angular/core';
import { File } from '../interfaces/file';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  files: string[] = [
    "me.ts",
    "education.ts",
    "experience.ts",
    "skills.ts",
    "contact.ts"
  ];

  openedFiles: File[] = [{
    fileName: 'me.ts',
    selected: true
  }];

  constructor() {
    //
  }

  selectFile(fileName: string): void{
    this.openedFiles.forEach((file) => file.selected = false);
    let foundIndex = this.openedFiles.findIndex((file) => file.fileName === fileName);
    if (foundIndex != -1)
      this.openedFiles[foundIndex].selected = true;
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
    if (foundIndex == -1)
      this.openedFiles.push(
        Object.assign({}, {
          fileName: fileName,
          selected: true,
        })
      );
  }

  getSelectedTab(): string{
    let foundIndex = this.openedFiles.findIndex((file) => file.selected === true);
    if (foundIndex != -1)
      return (this.openedFiles[foundIndex].fileName);
    return ('');
  }
}
