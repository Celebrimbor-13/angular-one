import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AllStateObj, Difficulty, Colors } from '../app.component';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss'],
})
export class DoneComponent implements OnInit {
  constructor() {}
  @Input() doneObj!: AllStateObj[];
  @Output() DoneArrToParent: EventEmitter<AllStateObj[]> = new EventEmitter<
    AllStateObj[]
  >();

  faAngleLeft = faAngleLeft;
  difficulty = Difficulty;
  color = Colors;

  backToProgress(i: number) {
    let forProgress = this.doneObj.splice(i, 1);
    this.DoneArrToParent.emit(forProgress);
  }

  ngOnInit(): void {}
}
