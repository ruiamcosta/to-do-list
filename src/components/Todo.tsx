import trashImg from '../assets/trash.svg';

import styles from './Todo.module.css';

interface Todo {
  id: string;
  task: string;
  isCompleted: boolean;
}

interface TodoProps {
  todo: Todo;
  onDeleteTodo: (id: string) => void;
  onCheckTodo: (id: string) => void;
}

export function Todo({ todo: { id, task, isCompleted }, onDeleteTodo, onCheckTodo }: TodoProps) {
  
  function handleCheckTodo() {
    onCheckTodo(id);
  }
  
  function handleDeleteTodo() {
    onDeleteTodo(id);
  }

  return (
    <div className={styles.todo}>
      <label className={styles.container}>
        <input 
          type="checkbox" 
          checked={isCompleted}
          onChange={handleCheckTodo}  
          />
        <span className={styles.checkmark}></span>
      </label>

      <span className={isCompleted ? styles.scratch: ''}>{task}</span>
      <button onClick={handleDeleteTodo}>
       <img src={trashImg} alt="Trash image" />  
      </button>
    </div>
  )
}