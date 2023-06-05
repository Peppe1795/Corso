import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todoList: Todo[] = [];

  constructor() {}

  getTodo(): Todo[] {
    return this.todoList;
  }

  addTask(item: Todo): void {
    setTimeout(() => {
      this.todoList.push(item);
    }, 2000);
  }

  deleteTask(task: Todo): void {
    setTimeout(() => {
      const searchId = this.todoList.findIndex((item) => item.id == task.id);
      this.todoList.splice(searchId, 1);
    }, 2000);
  }

  completedTask(item: Todo): void {
    setTimeout(() => {
      item.completed = true;
    }, 2000);
  }
}
