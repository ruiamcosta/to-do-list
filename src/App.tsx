import styles from './App.module.css'
import { Header } from './components/Header'
import { TodoList } from './components/TodoList'

interface Todo {
  id: string;
  task: string;
  isCompleted: boolean;
}

const data: Todo[] = [
  { 
    id: 'aa11',
    task: "Ir a um concerto",
    isCompleted: false,
  },
  { 
    id: 'aa12',
    task: "Lavar o carro",
    isCompleted: false,
  },
  { 
    id: 'aa13',
    task: "Aprender ReactJs",
    isCompleted: false,
  },
  { 
    id: 'aa14',
    task: "Resolver problemas de JavaScritp",
    isCompleted: false,
  }
]

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <TodoList data={data} />
      </div>
    </>
  )
}

export default App
