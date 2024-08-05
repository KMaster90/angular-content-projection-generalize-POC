import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  template: `<button>
       Click Me
     </button>`,
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}