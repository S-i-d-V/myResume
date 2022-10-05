import { Injectable } from '@angular/core';
import { File } from '../interfaces/file';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  files: File[] = [
    {
      fileName: 'me.ts',
      opened: true,
      selected: true
    }, {
      fileName: 'education.ts',
      opened: false,
      selected: false
    }, {
      fileName: 'experience.ts',
      opened: false,
      selected: false
    }, {
      fileName: 'skills.ts',
      opened: false,
      selected: false
    }, {
      fileName: 'contact.ts',
      opened: false,
      selected: false
    }
  ];

  constructor() {
    //
  }

  selectEditor(fileName: string): void{
    this.files.forEach((file) => file.selected = false);
    let foundIndex = this.files.findIndex((file) => file.fileName === fileName);
    if (foundIndex != -1){
      this.files[foundIndex].selected = true;
      this.openEditor(fileName);
    }
  }

  closeEditor(fileName: string): void{
    let foundIndex = this.files.findIndex((file) => file.fileName === fileName);
    if (foundIndex != -1){
      this.files[foundIndex].opened = false;
      if (this.files[foundIndex].selected){
        this.files[foundIndex].selected = false;
        for (let file of this.files){
          if (file.opened)
            file.selected = true;
          break;
        }
      }
    }
  }

  openEditor(fileName: string): void{
    let foundIndex = this.files.findIndex((file) => file.fileName === fileName);
    if (foundIndex != -1)
      this.files[foundIndex].opened = true;
  }

  getSelectedFile(): string{
    let foundIndex = this.files.findIndex((file) => file.selected === true);
    if (foundIndex != -1)
      return (this.files[foundIndex].fileName);
    return ('');
  }
}
