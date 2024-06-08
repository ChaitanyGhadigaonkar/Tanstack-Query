import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"

function App() {
  return (
    <div className="max-w-screen-xl min-h-screen mx-auto flex flex-col px-6">
      <div className="header">
        <h3 className="text-xl font-semibold py-3">Todo App</h3>
      </div>

      <AddTodo />

      <Todos />
    </div>
  )
}

export default App
