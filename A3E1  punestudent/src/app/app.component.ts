import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Student {
  id: number;
  name: string;
  age: number;
  city: string;
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  students: Student[] = [
    { id: 1, name: 'Rajesh', age: 20, city: 'Pune' },
    { id: 2, name: 'Sita', age: 21, city: 'Mumbai' },
    { id: 3, name: 'Amit', age: 22, city: 'Pune' },
    { id: 4, name: 'Neha', age: 23, city: 'Delhi' },
    { id: 5, name: 'Rahul', age: 24, city: 'Pune' },
    { id: 6, name: 'Priya', age: 25, city: 'Chennai' },
  ];

  getStudentsInPune(): Student[] {
    return this.students.filter((student) => student.city === 'Pune');
  }
}