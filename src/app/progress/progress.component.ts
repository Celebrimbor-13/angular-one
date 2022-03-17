import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AllStateObj, Difficulty, Colors } from '../app.component';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnInit {
  constructor() {}
  @Input() progressObj!: AllStateObj[];
  @Output() progressArrToParentForToDo: EventEmitter<AllStateObj[]> =
    new EventEmitter<AllStateObj[]>();
  @Output() progressArrToParentForDone: EventEmitter<AllStateObj[]> =
    new EventEmitter<AllStateObj[]>();

  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;
  difficulty = Difficulty;
  color = Colors;

  backToDo(i: number) {
    let forToDo = this.progressObj.splice(i, 1);
    this.progressArrToParentForToDo.emit(forToDo);
  }

  toDone(i: number) {
    let forDone = this.progressObj.splice(i, 1);
    this.progressArrToParentForDone.emit(forDone);
  }

  ngOnInit(): void {}
}
