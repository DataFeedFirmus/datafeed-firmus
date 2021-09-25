import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApireqService} from "../../services/apireq.service";
import {CommunicationService} from "../../service/communication.service";

@Component({
  selector: 'app-indicies',
  templateUrl: './indicies.component.html',
  styleUrls: ['./indicies.component.css']
})
export class IndiciesComponent  implements OnInit, OnDestroy {
  indicies = []
  recall;
  DATA: any
  constructor(private call : ApireqService, private communitaion : CommunicationService) {
    this.call.getItemsFromFireBase("indexes").then((value) =>{
      this.DATA = value;
      this.indicies = this.call.getDataForItemReusable(value)
    });
    this.communitaion.changeTitle("Indexes")
  }

  ngOnInit() {
    this.recall = setInterval(() => {
      this.indicies = this.call.getDataForItemReusable(this.DATA)
    }, 180 * 1000);
  }

  ngOnDestroy(){
    if (this.recall) {
      clearInterval(this.recall);
    }
  }


  getDetails(symbol) {
    this.communitaion.changeStatus(symbol)
  }

}


