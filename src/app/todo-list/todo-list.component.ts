import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  tasks:any =[]
  constructor(private task:TodoServiceService) { }

  ngOnInit(): void {
    this.tasks=this.task.getTasks();
  }

}
