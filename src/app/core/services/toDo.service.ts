import { Injectable } from '@angular/core';

export interface toDo {
  id: number;
  title: string;
  completed: boolean;
  changing: boolean;
}

@Injectable({ providedIn: 'root' })
export class ToDoService {
  doList: toDo[] = [];

  constructor() { }

  addLi(li: toDo) {
    this.doList.push(li);
  }

  remove(id: number){
    this.doList = this.doList.filter(t => t.id !== id);
    return this.doList;
  }

  noFilter() {
    return this.doList;
  }

  activeFilter() {
    let bufList;
    bufList = this.doList.filter(li => {
      return li.completed == false;
    });

    return bufList;
  }

  selectedFilter() {
    let bufList;
    bufList = this.doList.filter(li => {
      return li.completed == true;
    });
    return bufList;
  }

  removeCompleted() {
    this.doList = this.doList.filter(li => {
      return li.completed == false;
    });

    return this.doList;
  }
}
