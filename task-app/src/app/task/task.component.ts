import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from './task.service';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  taskList: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {

    const data = localStorage.getItem('tasks');

    if (data) {
      this.taskList = JSON.parse(data);
    } else {
      this.taskService.getTasks().subscribe(res => {
        this.taskList = res;
        localStorage.setItem('tasks', JSON.stringify(res));
      });
    }
  }
}
