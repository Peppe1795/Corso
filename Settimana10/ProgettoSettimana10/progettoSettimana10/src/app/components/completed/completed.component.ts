import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.interface';
import { TodosService } from 'src/app/service/todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit {
  todoList!: Todo[];
  entryMex: boolean = true;
  constructor(private todoSrv: TodosService) {
    this.todoList = todoSrv.todoList;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.entryMex = false;
    }, 2000);
  }

  deleteTask(task: Todo): void {
    this.todoSrv.deleteTask(task);
  }
}
