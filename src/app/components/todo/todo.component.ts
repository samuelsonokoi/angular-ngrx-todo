import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/todo';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { TodoRemove } from 'src/app/actions/todo-actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Observable<ITodo[]>;

  constructor(private _store: Store<{ todos: ITodo[] }>) {}

  ngOnInit(): void {
    this._store.pipe(select('todos')).subscribe((todos: any) => {
      console.log(todos);
      this.todos = todos;
    });
  }

  delete = (index: number) => {
    console.log(index);
    this._store.dispatch(new TodoRemove(index));
  };
}
