import {bindable} from 'aurelia-framework';

export class step {
  @bindable stepNumber;
  @bindable stepText;
  @bindable stepTextDone;

  done: boolean = false;

  toggleDone() {
    this.done = !this.done;
  }
}
