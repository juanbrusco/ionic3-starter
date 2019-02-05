import { Component, Input } from '@angular/core';

@Component({
  selector: 'timeline',
  templateUrl: 'timeline.html'
})
export class TimelineComponent {
  @Input('endIcon') endIcon = "ionic";
  constructor() {

  }

}

@Component({
  selector: 'timeline-item',
  template: '<ng-content></ng-content>'
})
export class TimelineItemComponent {
  constructor() {
  }
}


@Component({
  selector: 'timeline-header',
  template: '<span>{{header.name}}</span> <span>{{header.code}}</span>'
})
export class TimelineHeaderComponent {
  @Input('header') header = {};
  constructor() {

  }
}