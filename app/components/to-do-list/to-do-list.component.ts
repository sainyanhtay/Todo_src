import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from '../../models/toDo'
import { TodoListService } from './to-do-list-service'
import * as _ from 'lodash'

// declare var $: any;

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
  providers: [TodoListService]
})
export class ToDoListComponent implements OnInit {

  toDoList: any[]

  constructor(private toDoService: TodoListService) {

  }

  ngOnInit() {

    this.toDoService.getAllTodos().subscribe(data => {
      this.toDoList = data.filter(data => data.id < 9);
      console.log('todoList', this.toDoList)
    })
    $("#dataTable").DataTable({
      search: {
        search: "hello"
      }
    });

    // this.toDoList = [
    //   { id: 1, title: "a" }, { id: 2, title: "a" }, { id: 3, title: "a" }
    // ]
  }

  removeToDo(toDoId: number) {
    this.toDoService.deleteTodoById(toDoId);
    this.toDoList.splice(_.findIndex(this.toDoList, todo => todo.id == toDoId), 1);
    console.log('remove toDoId > ', toDoId);
  }

  updateToDo(toDoId: number) {
    this.toDoService.updateTodoById(toDoId)
    console.log('update toDoId > ', toDoId);

  }

  addToDo(toDo) {
    this.toDoList.push({
      userId: 0,
      id: 0,
      title: toDo.title,
      completed: false
    })
  }

}
