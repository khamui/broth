import {bindable} from 'aurelia-framework';

export class step {
  @bindable stepNumber;
  @bindable stepText;
  @bindable stepImg;
  @bindable stepTextDone;
  @bindable stepImgDone;

  done: boolean = false;

  toggleDone() {
    this.done = !this.done;
  }
}
