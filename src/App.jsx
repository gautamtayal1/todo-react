import Form from "./components/form"
import TodoItem from "./components/todoItem"

function App() {
  return(
    <div className=" text-white flex flex-col items-center h-[100vh] mt-20">
      <Form />
      <TodoItem />
    </div>
  )

}

export default App
