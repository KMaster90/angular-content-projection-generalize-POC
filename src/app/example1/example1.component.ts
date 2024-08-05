import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css']
})
export class Example1Component implements OnInit {


  ngOnInit() {

  }
  
  btnClicked($event) {
    console.log($event);
    alert("button clicked");
  }

  DoSomething($event) {
    alert("event fired from directive");
  }

}