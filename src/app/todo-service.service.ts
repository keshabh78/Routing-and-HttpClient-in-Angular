import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  tasks=[
    {"Id":1,"Task":"Complete SL lab work- services in angualar"},
    {"Id":2,"Task":"Complete SL lab work- routing in angular"},
    {"Id":3,"Task":"Do Software engineering project- cab booking system"},
    {"Id":4,"Task":"Prepare for Artificial Intelligence Quizz"},
    {"Id":5,"Task":"Attend Maths class at 5 pm"}
  ]

  getTasks()
  {
    return this.tasks;
  }
  constructor() { }
}
