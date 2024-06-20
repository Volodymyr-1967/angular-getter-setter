import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  user: User;

  constructor() {
    this.user = new User('Vladimir', new Date(1967, 7, 2));
  }

  ngOnInit(): void {}
}
