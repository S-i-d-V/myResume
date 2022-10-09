import { Component, OnInit } from '@angular/core';
import { TabsService } from 'src/app/services/tabs.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  editorOpen: boolean = true;
  filesOpen: boolean = true;

  constructor(public tabsService: TabsService) { }

  ngOnInit(): void {
  }

  switchEditor(): void {
    this.editorOpen = !this.editorOpen;
  }

  switchFiles(): void {
    this.filesOpen = !this.filesOpen;
  }

}
