import './App.css'
import { useState } from 'react';

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const submitTasks = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      if (editIndex !== null) {
        const updatedTasks = tasks.map((task, index) =>
          index === editIndex ? inputValue : task
        );
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, inputValue]);
      }
      setInputValue('');
    }
  };

  const editTask = (index) => {
    setInputValue(tasks[index]);
    setEditIndex(index);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const renderTasks = () => {
    const filteredTasks = tasks.filter(task =>
      task.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center">
            {task}
            <div>
              <button onClick={() => editTask(index)} className="mr-2">Edit</button>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div className="rounded-lg p-4 m-4 shadow-[0px_10px_90px_-15px_rgba(255,0,0,1.0)]">
        <h1 className="font-sans hover:font-serif from-neutral-400 inline-block">Todo List</h1>
        <form onSubmit={submitTasks} className="rounded-lg bg-black-100 p-4 m-4 flex gap-3 ">
          <input
            className="h-10 rounded-full p-5"
            type="text"
            placeholder="Add a new task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="rounded-full border-none hover:bg-red-700" type="submit">
            {editIndex !== null ? 'Update' : 'Add'}
          </button>
        </form>
        <div className="relative">
          <label htmlFor="Search" className="sr-only"> Search </label>
          <input  
            type="text"
            id="Search"
            placeholder="Search for..."
            className="w-full rounded-md border-none py-2.5 pe-10 shadow-xs sm:text-sm p-5"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button type="button" className="text-gray-600 hover:text-gray-70 hover:bg-red-700 hover:text-white-600 ">
              <span className="sr-only">Search</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </span>
        </div>
        <div className="rounded-s-md">
          {renderTasks()}
        </div>
      </div>
    </>
  );
}

export default Todo;
