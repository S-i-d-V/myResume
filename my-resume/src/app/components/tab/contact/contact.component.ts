import { Component, OnInit } from '@angular/core';
import { TabsService } from 'src/app/services/tabs.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public tabsService: TabsService) { }

  ngOnInit(): void {
  }

}
