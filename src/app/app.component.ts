import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export enum Difficulty {
  Easy = 'Easy',
  Medium = 'Medium',
  Hard = 'Hard',
}

export enum Colors {
  Yellow = 'warning',
  Red = 'danger',
  Blue = 'info',
}

enum States {
  ToDo = 'To-Do',
  Progress = 'Progress',
  Done = 'Done',
}

export interface AllStateObj {
  userInput: string;
  selectValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  faBars = faBars;
  difficulty = Difficulty;
  states = States;

  threeVariants = [
    { title: this.states.ToDo, toDoWin: true },
    { title: this.states.Progress, progressWin: true },
    { title: this.states.Done, doneWin: true },
  ];

  userInput: string = '';
  selectValue: string = '';

  toDoArr: AllStateObj[] = [];
  toProgressArr: AllStateObj[] = [];
  toDoneArr: AllStateObj[] = [];

  add() {
    let toDoObj = {
      userInput: this.userInput,
      selectValue: this.selectValue,
    };
    if (this.userInput && this.selectValue) {
      this.toDoArr.push(toDoObj);
    }
  }

  toProgress(data: AllStateObj[]) {
    this.toProgressArr.push(...data);
  }

  toToDo(data: AllStateObj[]) {
    this.toDoArr.push(...data);
  }

  toDone(data: AllStateObj[]) {
    this.toDoneArr.push(...data);
  }
}
