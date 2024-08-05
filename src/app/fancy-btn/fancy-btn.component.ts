import { Component, Output, EventEmitter, HostListener } from "@angular/core";

@Component({
  selector: "app-fancybtn",
  template: `
    <button>
      <ng-content></ng-content>
    </button>
  `
})
export class FancyBtnComponent {
  @Output() someEvent: EventEmitter<any> = new EventEmitter();

  raiseSomeEvent() {
    this.someEvent.emit();
  }

  @HostListener("click", ["$event"])
  clickEvent(event) {
    this.raiseSomeEvent()
  }
}
