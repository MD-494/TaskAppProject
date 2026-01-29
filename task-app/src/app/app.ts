import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'Task Application';
}
