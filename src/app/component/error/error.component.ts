import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CommunicationService} from "../../service/communication.service";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit, OnChanges {

  @Input() error = null;
  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
    this.communicationService.errorStatus.subscribe(errormsg =>{
      console.log('vo error ', errormsg)
      if(errormsg){
        this.error = errormsg;
      }
    })
  }

  ngOnChanges(changes :SimpleChanges){
    if(changes.error.currentValue){
      ////console.log("tuka")
      this.error = "Symbol not found! Please specify it correctly"
    }else{
      this.error = false;
    }
  }

}
