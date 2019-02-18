import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListBarComponent } from './todo-list-bar.component';

describe('TodoListBarComponent', () => {
  let component: TodoListBarComponent;
  let fixture: ComponentFixture<TodoListBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
