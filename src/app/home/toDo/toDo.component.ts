import {Component, OnInit} from '@angular/core';
import {AuthService, ToDoService} from '../../core/services';
import {toDo} from '../../core/models';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-list',
  templateUrl: './toDo.component.html',
  styleUrls: ['./toDo.component.scss']
})
export class ToDoComponent implements OnInit {
  changeWin: boolean;
  changeTodo: toDo;
  title: string;

  todos: toDo[] = [];

  dSub: Subscription;

  constructor(private todoService: ToDoService) {}

  ngOnInit() {
    this.todoService.getAll().subscribe((toDos) => {
      this.todos = toDos;
    })
  }

  public add() {
    if (!this.title) {
      return 0;
    }

    const li: toDo = {
      text: this.title,
      completed: false
    };
    this.title = '';

    this.todoService.addLi(li).subscribe((todo) => {
      this.todos.push(todo);
    })
  }

  changing(id: string) {
    this.todoService.getById(id).subscribe((todo) => {
      this.todoService.change({
        ...todo,
        completed: !todo.completed
      }).subscribe()
    });
  }

  remove(id: string) {
    this.todoService.remove(id).subscribe(() => {
      this.todos = this.todos.filter(post => post.id !== id);
    })
  }

  removeCompleted() {
    let buf: toDo[] = this.todos.filter(todo => todo.completed);
    buf.forEach(todo => {
      this.dSub = this.todoService.remove(todo.id).subscribe(() => {
        this.todos = this.todos.filter(todo => !todo.completed);
        this.dSub.unsubscribe();

        if (!this.todos.length) {
          this.todoService.getAll().subscribe((todos) => this.todos = todos);
        }
      })
    })
  }

  changeToDO(todo?: toDo) {
    if (todo) {
      this.changeWin = true;
      this.changeTodo = todo;
      return;
    } else {
      this.todoService.change({
        ...this.changeTodo,
        text: this.changeTodo.text
      }).subscribe(() => {
        this.changeTodo = new class implements toDo {
          completed: boolean;
          id: string;
          text: string;
        };
      })
    }
  }

  /*FORM (INPUT/FILTER)*/

  filter(event) {
    switch (event.value) {
      case "All":
        this.todoService.getAll().subscribe((toDos) => {this.todos = toDos;});
        break;
      case "Active":
        this.todoService.getAll().subscribe((toDos) => {
          this.todos = toDos.filter(todo => todo.completed === false);});
         break;
      case "Completed":
        this.todoService.getAll().subscribe((toDos) => {
          this.todos = toDos.filter(todo => todo.completed === true);});
        break;
    }
  }
}
