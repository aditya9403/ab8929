import { Component, OnInit } from '@angular/core'; // Import OnInit
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, FormsModule],  // Remove RouterOutlet if routing isn't needed
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrected styleUrls (plural)
})
export class AppComponent implements OnInit {
  noteContent: string = '';  
  notes: { content: string; timestamp: string }[] = [];
  currentDateTime: string = '';

  ngOnInit(): void {
    // Update the current date and time every second
    interval(1000).subscribe(() => {
      this.currentDateTime = new Date().toLocaleString();
    });
  }

  addNote(): void {
    if (this.noteContent.trim()) {
      this.notes.push({
        content: this.noteContent,
        timestamp: new Date().toLocaleString(),
      });
      this.noteContent = '';  // Clear the input after adding a note
    }
  }
}
