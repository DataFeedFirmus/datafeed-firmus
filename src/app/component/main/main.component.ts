import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CommunicationService} from "../../service/communication.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {

  title;
  error: any;
  constructor(private elementRef: ElementRef, private router: Router, private communication : CommunicationService) {
  }

  ngOnInit() {
    this.communication.titleStatus.subscribe(title => {
      if(title){
        this.title = title;
      }
    })
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#023d78';
  }

  activatePage(name){
    this.router.navigateByUrl('main/'+name);
  }
s
}
