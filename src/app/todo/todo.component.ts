import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AllStateObj, Difficulty, Colors } from '../app.component';
import { faAngleRight, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  constructor() {}
  @Input() toDoObj!: AllStateObj[];
  @Output() toDoArrToParent: EventEmitter<AllStateObj[]> = new EventEmitter<
    AllStateObj[]
  >();

  faAngleRight = faAngleRight;
  faXmark = faXmark;
  difficulty = Difficulty;
  color = Colors;

  toProgress(i: number) {
    let forProgress = this.toDoObj.splice(i, 1);
    this.toDoArrToParent.emit(forProgress);
  }

  deleteItem(i: number) {
    this.toDoObj.splice(i, 1);
  }

  ngOnInit(): void {}
}
