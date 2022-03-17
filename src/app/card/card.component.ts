import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AllStateObj, Difficulty, Colors } from '../app.component';
import { faXmark, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

interface Variant {
  title: string;
  toDoWin?: boolean | undefined;
  progressWin?: boolean | undefined;
  doneWin?: boolean | undefined;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor() {}
  @Input() variant!: Variant;

  @Input() toDoObj!: AllStateObj[];
  @Input() progressObj!: AllStateObj[];
  @Input() doneObj!: AllStateObj[];

  @Output() toDoArrToParent: EventEmitter<AllStateObj[]> = new EventEmitter<AllStateObj[]>();
  @Output() progressArrToParentForToDo: EventEmitter<AllStateObj[]> = new EventEmitter<AllStateObj[]>();
  @Output() progressArrToParentForDone: EventEmitter<AllStateObj[]> = new EventEmitter<AllStateObj[]>();
  @Output() DoneArrToParent: EventEmitter<AllStateObj[]> = new EventEmitter<AllStateObj[]>();

  faXmark = faXmark;
  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;
  difficulty = Difficulty;
  color = Colors;

  deleteItem(i: number) {
    this.toDoObj.splice(i, 1);
  }

  toProgress(i: number) {
    let forProgress = this.toDoObj.splice(i, 1);
    this.toDoArrToParent.emit(forProgress);
  }

  backToDo(i: number) {
    let forToDo = this.progressObj.splice(i, 1);
    this.progressArrToParentForToDo.emit(forToDo);
  }

  toDone(i: number) {
    let forDone = this.progressObj.splice(i, 1);
    this.progressArrToParentForDone.emit(forDone);
  }

  backToProgress(i: number) {
    let forProgress = this.doneObj.splice(i, 1);
    this.DoneArrToParent.emit(forProgress);
  }

  ngOnInit(): void {}
}
