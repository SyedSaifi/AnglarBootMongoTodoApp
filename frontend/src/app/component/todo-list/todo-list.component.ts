import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/todo';
import { NgForm } from '@angular/forms';
import { TodoService } from '../../service/todo.service';
import { ISubscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {

  todos: Todo[];
  newTodo: Todo = new Todo();
  editing: boolean = false;
  editingTodo: Todo = new Todo();
  private subscription: ISubscription;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }
  
  /**
   * getTodos() : For fetching the list of todos
   * expect an Observable<Todo[]> from service layer
   */
  public getTodos(): void {
    this.subscription = this.todoService.getTodos()
    .subscribe(
      result => {
      this.todos = result
      },
      error =>{
        return Observable.throw(error.message || error);
      }
    );    
  }

  /**
   * createTodo : For creating a new todo
   * expects an Observable<Todo[]> from service layer
   * @param todoData 
   */
  public createTodo(todoForm: NgForm): void {
    this.subscription = this.todoService.createTodo(this.newTodo)
    .subscribe(
      result => {
        todoForm.reset();
        this.newTodo = new Todo();
        this.todos.unshift(result)
      },
      error =>{
        return Observable.throw(error.message || error);
      }
    );
  }

  /**
   * deleteTodo : For deleting a todo from the database
   * expects Promise<any> (This is done to demo the usage of promise for this application)
   * @param id 
   */
  public deleteTodo(id: string): void {
    this.todoService.deleteTodo(id)
    .then(() => {
      this.todos = this.todos.filter(todo => todo.id != id);
    });
  }

  /**
   * updateTodo : For updating a todo
   * expects Promise<Todo> (This is done to demo the usage of promise for this application)
   * @param todoData 
   */
  public updateTodo(todoData: Todo): void {
    this.todoService.updateTodo(todoData)
    .then(updatedTodo => {
      let existingTodo = this.todos.find(todo => todo.id === updatedTodo.id);
      Object.assign(existingTodo, updatedTodo);
      this.clearEditing();
    });
  }

  /**
   * toggleCompleted : For makring the todo as completed/uncompleted
   * @param todoData 
   */
  public toggleCompleted(todoData: Todo): void {
    todoData.completed = !todoData.completed;
    this.todoService.updateTodo(todoData)
    .then(updatedTodo => {
      let existingTodo = this.todos.find(todo => todo.id === updatedTodo.id);
      Object.assign(existingTodo, updatedTodo);
    });
  }

  /**
   * editTodo: for editing a todo
   * @param todoData 
   */
  public editTodo(todoData: Todo): void {
    this.editing = true;
    Object.assign(this.editingTodo, todoData);
  }

  /**
   * clearEditing : For clearing an edited todo after submittion or clearings
   */
  public clearEditing(): void {
    this.editingTodo = new Todo();
    this.editing = false;
  }

}
