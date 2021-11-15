import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  tasks:any =[]
  constructor(private task:TodoServiceService) { }

  ngOnInit(): void {
    this.tasks= this.task.getTasks();
  }

}
