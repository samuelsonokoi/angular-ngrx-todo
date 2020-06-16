import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITodo } from 'src/app/models/todo';
import { TodoAdd } from 'src/app/actions/todo-actions';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  constructor(private _store: Store<{ todos: ITodo[] }>) {}

  ngOnInit(): void {}

  add_todo = (title: string) => {
    const todo: ITodo = {
      title,
    };
    this._store.dispatch(new TodoAdd(todo));
  };
}
