import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [TodoService]
})
export class TodosComponent implements OnInit {
  todos;
  text;
  oldText;
  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todos = this._todoService.getTodos();
  }

  addTodo() {
    var todo = { text: this.text};
    this.todos.push(todo);
    console.log(this.text);
    this.text = '';
    this._todoService.addTodo(todo);
  }

  deleteTodo(todo) {
    console.log('delete', todo);
    var index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);

    this._todoService.deleteTodo(todo);
  }

  editTodo(todo, el) {
    for (var t of this.todos) {
      t.edit = false;
    }
    this.oldText = todo.text;
    todo.edit = true;
    console.log(el);
    setTimeout(function() {
      el.focus();
    });
  }

  updateTodo(todo) {
    //console.log(todo, this.oldText);
    todo.edit = false;
    console.log(this.todos);
    this._todoService.setTodos(this.todos);
  }

  doneTodo(todo) {
    todo.done = todo.done ? false : true;
    console.log('delete', todo);
    var index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    if(todo.done) {
      this.todos.push(todo);
    } else {
      this.todos.unshift(todo);
    }

    this._todoService.setTodos(this.todos);
  }

}
