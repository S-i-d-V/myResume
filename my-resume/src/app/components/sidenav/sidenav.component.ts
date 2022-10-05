import { Component, OnInit } from '@angular/core';
import { File } from 'src/app/interfaces/file';
import { FilesService } from 'src/app/services/files.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  editorOpen: boolean = true;

  constructor(public fileService: FilesService) { }

  ngOnInit(): void {
  }

  switchEditor(): void {
    this.editorOpen = !this.editorOpen;
  }

}
