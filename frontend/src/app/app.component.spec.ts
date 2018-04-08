import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TodoListComponent } from 'app/component/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TodoService } from 'app/service/todo.service';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule, 
        HttpModule
      ],
      declarations: [
        AppComponent,
        TodoListComponent
      ],
      providers: [TodoService],
    }).compileComponents();
  }));
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
