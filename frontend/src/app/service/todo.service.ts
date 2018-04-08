import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Todo } from '../model/todo';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {
  private baseUrl = 'http://localhost:8080';
  constructor(private http: Http) {}

  /**
   * getTodos() : For fetching the list of todos
   * returns Observable<Todo[]>
   */
  public getTodos(): Observable<Todo[]> {
    return this.http.get(this.baseUrl + '/api/todos/')
      .map(response => response.json() as Todo[]);
  }

  /**
   * createTodo : For creating a new todo
   * returns Observable<Todo[]>
   * @param todoData 
   */
  public createTodo(todoData: Todo): Observable<Todo> {
    return this.http.post(this.baseUrl + '/api/todos/', todoData)
      .map(response => response.json() as Todo);
  }

  /**
   * updateTodo : For updating a todo
   * returns Promise<Todo> (This is done to demo the usage of promise for this application)
   * @param todoData 
   */
  public updateTodo(todoData: Todo): Promise<Todo> {
    return this.http.put(this.baseUrl + '/api/todos/' + todoData.id, todoData)
      .toPromise()
      .then(response => response.json() as Todo)
      .catch(this.handleError);
  }

  /**
   * deleteTodo : For deleting a todo from the database
   * returns Promise<any> (This is done to demo the usage of promise for this application)
   * @param id 
   */
  public deleteTodo(id: string): Promise<any> {
    return this.http.delete(this.baseUrl + '/api/todos/' + id)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
