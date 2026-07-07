import {useState} from 'react'
import Navbar from './components/Navbar'

function App(){

    const [todo, setTodo]= useState("") 
    const [todos, setTodos]= useState([])
    

    const handleEdit = (id) => {

    // Find the todo to edit
    const editTodo = todos.find(item => item.id === id);

    // Put its text into the input box
    setTodo(editTodo.todo);

    // Remove it from the list
    const newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
}

    const handleDelete=(id) =>{
     const confirmDelete = window.confirm("Are you sure you want to delete this task?");

    if (confirmDelete) {
        const newTodos = todos.filter((item) => item.id !== id);
        setTodos(newTodos);
    }

       
    }

    const handleAdd=() =>{

        if (!todo.trim()) return;

        setTodos([
            ...todos,
            {
                id: Date.now(),
                todo: todo,
                isCompleted: false
            }
        ]);

        setTodo("");


    }
    const handleChange =(e)=>{
        setTodo(e.target.value)
    }

   const handleCheckbox = (e) => {
    const id = Number(e.target.name);

    const newTodos = todos.map(item => {
        if (item.id === id) {
            return {
                ...item,
                isCompleted: !item.isCompleted
            };
        }
        return item;
    });

    setTodos(newTodos);
}
  return (
    <>
    <div>
        <Navbar/>
        <div className="container mx-auto my-5 rounded-xl bg-violet-100 min-h-[80vh] p-5"> 
           <div className='addTodo my-5'>
                <h2 className='text-lg font-bold'>Add Todo</h2> 
                <input onChange={handleChange} value={todo} type="text" className="bg-white border-white w-80" />
                <button onClick ={handleAdd} className='bg-violet-600 hover:bg-violet-500 px-2 text-sm font-bold py-0.5 text-white rounded-md m-4 '>
                    Add</button>

             <h2 className='text-lg font-bold'>Your Todos</h2>

        <div className='todos'>

            {todos.map(item => {
            return  <div key={item.id} className="todo flex my-2 w-1/4 justify-between ">
                <input
                    type="checkbox"
                    name={item.id}
                    checked={item.isCompleted}
                    onChange={handleCheckbox}
                />
                <div className={item.isCompleted ? "line-through" : ""}>
                    {item.todo}
                </div>
                    <div className="buttons">
                        <button onClick={() => handleEdit(item.id)}
                            className="bg-violet-600 hover:bg-violet-500 px-2 text-sm font-bold py-0.5 text-white rounded-md mx-1">
                        Edit
                    </button>
                    
                        <button onClick={() => handleDelete(item.id)}
                         className="bg-violet-600 hover:bg-violet-500 px-2 text-sm font-bold py-0.5 text-white rounded-md mx-1">
                            Delete</button>
                    </div>
            </div>
})}

            </div>

            <div className='todo'>

            </div>

        </div>
        </div>
    </div>
   </>
  )
}

export default App