import { Injectable, OnDestroy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestService } from 'src/app/shared/services/RestService';
import TodoList from './TodoList';

@Injectable({
  providedIn: 'root'
})
export class TodolistService extends RestService  implements OnDestroy {

  private relativeUrl: string = "list";

  constructor(http: HttpClient) {
    super(http);
  }

  getAllTodoList(): Observable<TodoList[]> {
    return this.get<any>(this.relativeUrl).pipe(
      map(res => res.data),
      catchError(this.handleError('get all todo list', []))
    );
  }

  addTodo(todo: TodoList): Observable<TodoList> {
    return this.post<any>(this.relativeUrl, todo).pipe(
      map(res => res.data),
      catchError(this.handleError<TodoList>('addTodo'))
    );
  }

  deleteTodo(id: Number): Observable<Boolean> {
    return this.delete<any>(this.relativeUrl + `/${id}`).pipe(
      catchError(this.handleError<TodoList>('deleteTodo'))
    );
  }


  search(todo: string): Observable<TodoList[]> {
    if (!todo.trim()) {
      // if not search term, return empty hero ar5ray.
      return this.getAllTodoList();
    } else {
      return this.get<any>(this.relativeUrl + `/search/${todo}`).pipe(
        map(res => res.data),
        catchError(this.handleError<TodoList[]>('searchTodoList', []))
      );
    }
  }
  ngOnDestroy(){
    console.log("TodolistService ngOnDestroy");
  }
 
 
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`)
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
