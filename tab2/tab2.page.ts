import { Component } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { SharedService } from '../services/shared.service';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  message: Message = new Message();

  constructor(private shared: SharedService, private data: DataService) {}

onPost(){
  this.message.from = this.shared.userName;
  this.message.createdOn = newDate();
  this.data.saveMessage(this.message);

  console.log('posting', this.message);

  this.message = new Message();
  }
}
