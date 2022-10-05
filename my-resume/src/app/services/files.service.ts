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
      opened: true,
      selected: false
    }, {
      fileName: 'experience.ts',
      opened: true,
      selected: false
    }, {
      fileName: 'skills.ts',
      opened: true,
      selected: false
    }, {
      fileName: 'contact.ts',
      opened: true,
      selected: false
    }
  ];

  constructor() {
    //
  }

  selectEditor(fileName: string): void{
    this.files.forEach((file) => file.selected = false);
    let foundIndex = this.files.findIndex((file) => file.fileName === fileName);
    if (foundIndex != -1)
      this.files[foundIndex].selected = true;
  }

  closeEditor(fileName: string): void{
    let foundIndex = this.files.findIndex((file) => file.fileName === fileName);
    if (foundIndex != -1)
      this.files[foundIndex].opened = false;
  }

  getSelectedFile(): string{
    let foundIndex = this.files.findIndex((file) => file.selected === true);
    if (foundIndex != -1)
      return (this.files[foundIndex].fileName);
    return ('');
  }
}
