import { Component, OnInit } from '@angular/core';
import { Content, Interest, Project } from '../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
