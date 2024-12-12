import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  students = [
    { rollNo: 1, name: 'Alice', age: 20, course: 'Computer Science' },
    { rollNo: 2, name: 'Bob', age: 22, course: 'Mechanical Engineering' },
    { rollNo: 3, name: 'Charlie', age: 21, course: 'Electrical Engineering' },
    { rollNo: 4, name: 'David', age: 23, course: 'Mathematics' },
    { rollNo: 5, name: 'Eva', age: 20, course: 'Physics' },
    { rollNo: 6, name: 'Frank', age: 22, course: 'Chemistry' },
    { rollNo: 7, name: 'Grace', age: 21, course: 'Biology' },
    { rollNo: 8, name: 'Hank', age: 23, course: 'Economics' },
    { rollNo: 9, name: 'Ivy', age: 20, course: 'Law' },
    { rollNo: 10, name: 'Jack', age: 22, course: 'History' },
  ];
}
