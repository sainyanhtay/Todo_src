import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../../components/to-do-list/to-do-list-service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private todoService: TodoListService) { }

  ngOnInit() {
  }

}
