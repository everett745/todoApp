import {Component, OnInit} from '@angular/core';
import {ToDoService} from '../core/services';
import {toDo} from '../core/models';


@Component({
  selector: 'app-list',
  templateUrl: './toDo.component.html',
  styleUrls: ['./toDo.component.scss']
})
export class ToDoComponent implements OnInit {
  changeId: number;
  changeText: string;
  title: string;
  ToDo: toDo[] = this.listService.doList;

  constructor(private listService: ToDoService) {}

  ngOnInit() {
  }

  remove(id: number) {
    this.ToDo = this.listService.remove(id);
  }

  changeTextF(id?: number) {
    if (id) {
      this.changeId = id;
      let elem = this.listService.doList[id - 1];
      elem.changing = true;
      this.changeText = elem.title;
    } else {
      let elem = this.listService.doList[this.changeId - 1];
      elem.changing = false;
      elem.title = this.changeText;
    }
  }

  /*FORM (INPUT/FILTER)*/

  public addDoInList() {
    if (!this.title) {
      return 0;
    }

    const li: toDo = {
      title: this.title,
      id: this.listService.doList.length + 1,
      completed: false,
      changing: false
    };
    this.title = '';

    this.listService.addLi(li);
  }

  func(event) {
    switch (event.value) {
      case "All": this.ToDo = this.listService.noFilter(); break;
      case "Active": this.ToDo = this.listService.activeFilter(); break;
      case "Completed": this.ToDo = this.listService.selectedFilter(); break;
    }
  }

  removeCompleted() {
    this.ToDo = this.listService.removeCompleted();
  }
}
