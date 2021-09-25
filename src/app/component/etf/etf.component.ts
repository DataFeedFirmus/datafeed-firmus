import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApireqService} from "../../services/apireq.service";
import {CommunicationService} from "../../service/communication.service";

@Component({
  selector: 'app-etf',
  templateUrl: './etf.component.html',
  styleUrls: ['./etf.component.css']
})
export class EtfComponent implements OnInit, OnDestroy {
  needen: any;
  etfList = []
  recall;
  constructor(private call : ApireqService, private communitaion : CommunicationService) {
    this.call.getItemsFromFireBase("crypto").then((value) =>{
      this.needen = value;
      this.etfList = this.call.getDataForItemReusable(value)
    });
    // this.etfList = this.call.getDataForItemReusable(this.needen)
    this.communitaion.changeTitle("Crypto")
  }
  ngOnInit() {
    this.recall = setInterval(() => {
      this.etfList = this.call.getDataForItemReusable(this.needen)
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



