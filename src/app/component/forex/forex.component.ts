import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApireqService} from "../../services/apireq.service";
import {CommunicationService} from "../../service/communication.service";

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css']
})
export class ForexComponent implements OnInit, OnDestroy {
  forexList = [];
  needen:any;
  recall;
  constructor(private call : ApireqService, private communitaion : CommunicationService) {
    this.call.getItemsFromFireBase("forex").then((value) =>{
      this.needen = value;
      this.forexList = this.call.getDataForItemReusable(value)
    });
    this.communitaion.changeTitle("Forex")
  }

  ngOnInit() {
    this.recall = setInterval(() => {
      this.forexList = this.call.getDataForItemReusable(this.needen)
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



