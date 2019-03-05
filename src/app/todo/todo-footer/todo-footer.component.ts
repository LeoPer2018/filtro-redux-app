import { Component, OnInit } from '@angular/core';

import * as fromFiltro from '../../filter/filter.actions';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';

import { Todo } from '../models/todo.model';
import * as fromTodo from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: fromFiltro.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual : fromFiltro.filtrosValidos;
  pendientes: number;


  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.store.subscribe( estado =>{
      this.contarPendientes( estado.todos);
      this.filtroActual = estado.filtro;
    });
  }


  cambiarFiltro( nuevoFiltro : fromFiltro.filtrosValidos ) {

    const accion=new fromFiltro.SetFiltroAction(nuevoFiltro);

    this.store.dispatch(accion);

  }


contarPendientes(todos: Todo[]){

  this.pendientes= todos.filter( a=> !a.completado ).length;

}


  borrarTodo(){

   const accion = new fromTodo.LimpiarTodoAction();

   this.store.dispatch(accion);

  }


}
