import {Component, OnInit} from '@angular/core';
import {TodosService} from '../shared/todos.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  private loading = true;
  private searchString = '';

  constructor(private todosService: TodosService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.todosService.fetchTodos()
      .pipe(delay(500))
      .subscribe(() => {
        this.loading = false;
      });
  }

  // tslint:disable-next-line:typedef
  onChange(id: number) {
    this.todosService.onToggle(id);
  }

  // tslint:disable-next-line:typedef
  removeTodo(id: number) {
    this.todosService.removeTodo(id);
  }

}

