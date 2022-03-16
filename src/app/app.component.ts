import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

interface ToDo {
  userInput: string;
  selectValue: string;
}

interface Content {
  state: string;
  toDo?: ToDo[] | undefined;
  progress?: ToDo[] | undefined;
  done?: ToDo[] | undefined;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-first-assignement';
  faBars = faBars;
  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;
  faXmark = faXmark;
  userInput: string = '';
  selectValue: string = '';

  selectOptions = ['Easy', 'Medium', 'Hard'];

  content: Content[] = [
    {
      state: 'To-Do',
      toDo: [],
    },

    {
      state: 'In Progress',
      progress: [],
    },

    {
      state: 'Done',
      done: [],
    },
  ];

  add() {
    let toDo = {
      userInput: this.userInput,
      selectValue: this.selectValue,
    };
    if (this.userInput && this.selectValue) {
      this.content[0].toDo?.push(toDo);
    }
  }

  delete(index: number) {
    this.content[0].toDo?.splice(index, 1);
  }

  toProgress(index: number) {
    let forProgress = this.content[0].toDo?.splice(index, 1);
    if (forProgress) {
      this.content[1].progress?.push(...forProgress);
    }
  }

  toToDo(index: number) {
    let forToDo = this.content[1]?.progress?.splice(index, 1);
    if (forToDo) {
      this.content[0].toDo?.push(...forToDo);
    }
  }
  toDone(index: number) {
    let forDone = this.content[1]?.progress?.splice(index, 1);
    if (forDone) {
      this.content[2].done?.push(...forDone);
    }
  }
  backToProgress(index: number) {
    let backForProgress = this.content[2]?.done?.splice(index, 1);
    if (backForProgress) {
      this.content[1].progress?.push(...backForProgress);
    }
  }
}
