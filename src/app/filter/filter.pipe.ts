import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/models/todo.model';

import * as fromPipe from '../filter/filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtro: fromPipe.filtrosValidos): Todo [] {

    console.log(todos);
    console.log(filtro);


    switch(  filtro  ){

      case 'completados' :
        return todos.filter( a => a.completado );

      case 'pendientes' :
        return todos.filter( a => !a.completado );

      default :
      return todos;

    }

    return todos;

  }

}
