import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.interface';
import { TodosService } from 'src/app/service/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todoList!: Todo[];
  nuovaTask: string = '';
  entryMex: boolean = true;

  constructor(private todoSrv: TodosService) {
    this.todoList = todoSrv.todoList;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.entryMex = false;
    }, 2000);
  }

  addTask() {
    const nuovaTask: Todo = {
      id: this.todoList.length + 1,
      title: this.nuovaTask,
      completed: false,
    };
    this.todoSrv.addTask(nuovaTask);
    this.nuovaTask = '';
  }

  deleteTask(task: Todo): void {
    this.todoSrv.deleteTask(task);
  }

  completedTask(item: Todo): void {
    this.todoSrv.completedTask(item);
    console.log(item.completed);
  }
}
