import { ChangeEvent, useState, FormEvent } from 'react';
import {v4 as uuidv4 } from 'uuid';

import plusImg from '../assets/plus.svg';
import clipboardImg from '../assets/clipboard.svg';

import styles from './TodoList.module.css';
import { Todo } from './Todo';

interface Todo {
  id: string;
  task: string;
  isCompleted: boolean;
}

interface TodoListProps {
  data: Todo[];
}

export function TodoList({ data }: TodoListProps) {
  const [todos, setTodos] = useState(data);
  const [task, setTask] = useState('');

  const todosCreated = todos.length;

  const remainingTodos = todos.filter(todo => todo.isCompleted).length; ;

  function handleAddTodo(e: FormEvent) {
    e.preventDefault();
    
    const todo = { 
      id: uuidv4(),
      task: task,
      isCompleted: false,
    }

    task && setTodos([...todos, todo]);
    
    setTask('');
  }

  function handleDeleteTodo(id: string) {
    const updateTodos = todos.filter( todo => todo.id !== id);
    setTodos(updateTodos);
  }

  function handleTodoTextChange(e: ChangeEvent<HTMLInputElement>) {
    setTask(e.target.value);
  }

  function handleCheckTodo(id: string) {
    const updatedTodos = todos.map(todo => {
      if(todo.id === id) {
        return { 
          ...todo,
          isCompleted: !todo.isCompleted,
        }
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  return (
    <div>
      <form onSubmit={handleAddTodo} className={styles["new-todo"]}>
        <input 
          type="text" 
          placeholder="Adicione uma nova tarefa"
          value={task}
          onChange={handleTodoTextChange}
        />
        <button type="submit">
          <span>Criar</span>
          <img src={plusImg} alt="" />
        </button>
      </form>

      <div className={styles["todo-list"]}>
        <header className={styles.header}>
          <div className={styles["todo-created"]}>
            <strong className={styles.created}>Tarefas criadas</strong>
            <span>{todosCreated}</span>
          </div>
          <div className={styles["todo-done"]}>
            <strong className={styles.done}>Concluídas</strong>
            <span>{remainingTodos} de {todosCreated}</span>
          </div>
        </header>

        {todos.length === 0 ? (
          <div className={styles.content}>
            <img src={clipboardImg} alt="Clipboard image" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        ) : (
          todos.map(todo => (
            <Todo
              key={todo.id} 
              todo={todo}
              onDeleteTodo={handleDeleteTodo}
              onCheckTodo={handleCheckTodo}
            />
          ))
        )}
      </div>
    </div>
  );
}