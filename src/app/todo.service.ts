import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  constructor() {
    console.log('service up..');
  }

  getTodos() {
    var todos = JSON.parse(localStorage.getItem('todos'));
    console.log(todos);
    if(!todos) {
      console.log('setting empty');
      todos = [];
      localStorage.setItem('todos', JSON.stringify(todos));
    }
    return todos;
  }

  addTodo(todo) {
    var todos = JSON.parse(localStorage.getItem('todos'));
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  deleteTodo(todo) {
    var todos = JSON.parse(localStorage.getItem('todos'));
    var index = todos.indexOf(todo);
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  setTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

}
