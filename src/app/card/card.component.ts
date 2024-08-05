import {
  Component,
  contentChildren,
  viewChildren,
  ElementRef,
  input,
  Injector,
  inject,
  afterNextRender,
} from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <div class="header">
        <ng-content select="header"></ng-content>
      </div>
      <div class="content">
        <ng-content select="content"></ng-content>
      </div>
      <div class="footer">
        @if(childrenTemp){<ng-container [ngTemplateOutlet]="$any(childrenTemp()[0])"/>}
      </div>     
    </div>

    @for(child of [1,2]; track $index){
    <ng-template #childrenTempl>
      <ng-content select="[customCell]"></ng-content>
    </ng-template>
    }
    <ng-template #a>maio</ng-template>
  `,
  styles: [
    ` .card { min-width: 280px;  margin: 5px;  float:left  } 
      .header { color: blue}
    `,
  ],
})
export class CardComponent {
  private injector = inject(Injector);

  children = contentChildren('customCell', { read: ElementRef });
  childrenTemp = viewChildren('childrenTempl');
  ids = input([]);
  columnsName = input([]);

  ngAfterContentInit() {
    console.log(
      'LOG ElementRef',
      new Date(),
      this.children()?.length,
      this.children()?.[0].nativeElement
    );
    afterNextRender(
      () =>
        console.log(
          'LOG TemplateRef',
          new Date(),
          this.childrenTemp()?.length,
          JSON.parse(
            JSON.stringify(this.childrenTemp(), this.getCircularReplacer())
          ),
          //@ts-ignore
          this.childrenTemp()?.[0]?.elementRef
        ),
      { injector: this.injector }
    );
  }

  getCircularReplacer() {
    const seen = new WeakSet();
    return function (key, value) {
      if (typeof value === 'object' && value !== null) {
        if (seen.has(value)) {
          return '[Circular]';
        }
        seen.add(value);
      }
      return value;
    };
  }
}
