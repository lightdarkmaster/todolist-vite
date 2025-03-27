import './App.css'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';


//usa la ka state an title tas an desctription
//add login
//prime react
function Todo() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const showModalTask = (index) => {
    const task = tasks[index];
    Swal.fire({
      title: `Title: ${task.title}`,
      text: `Description: ${task.description}`,
      icon: "info",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Close",
      theme: "dark"
    });
  };

  const modalUpdated = () => {
    Swal.fire({
      title: "Added Succesfully!",
      icon: "success",
      draggable: true,
      theme: "dark"
    });
  }

  const logoutModal = () => {
    Swal.fire({
      title: "Logout Succesfully!",
      icon: "success",
      draggable: true,
      theme: "dark"
    });
  }
  const logout = () => {
    logoutModal();
    navigate('/');
  }

  const modalForDelete = (index) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
      theme: "dark"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTask(index);
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          theme: "dark"
        });
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error",
          theme: "dark"
        });
      }
    });
  }

  const submitTasks = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      if (editIndex !== null) {
        const updatedTasks = tasks.map((task, index) =>
          index === editIndex ? { title, description } : task
        );
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, { title, description }]);
      }
      setTitle('');
      setDescription('');
    }
  };

  // const viewTask = (index) => {
  //   const task = tasks[index];
  //   alert(`Title: ${task.title}\nDescription: ${task.description}`);
  // }

  const editTask = (index) => {
    setTitle(tasks[index].title);
    setDescription(tasks[index].description);
    setEditIndex(index);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const renderTasks = () => {
    const filteredTasks = tasks.filter(task =>
      task.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      task.description.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center">
            <div>
              <strong>{task.title}</strong>: {task.description}
            </div>
            <div>
              <button onClick={() => showModalTask(index)} className="m-3 hover:bg-red-700">View</button>
              <button onClick={() => editTask(index)} className="m-3 hover:bg-red-700">Edit</button>
              <button onClick={() => { modalForDelete(index); }} className="mr-2 hover:bg-red-700">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div className="rounded-lg p-4 m-4 shadow-[0px_10px_90px_-15px_rgba(255,0,0,1.0)] hover:shadow-[0px_10px_90px_-15px_rgba(0,0,255,1.0)] w-[100%] resize-none border">
        <h1 className="font-sans hover:font-serif from-neutral-10 inline-block bg-transparent">Todo List</h1>
        <form onSubmit={submitTasks} className="rounded-lg bg-black-100 p-4 m-4 flex gap-3 max">
          <input
            className="h-10 w-[100%] rounded-full p-5 hover:shadow-[10px_5px_100px_-15px_rgba(0,0,255,1.0)] border"
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className="rounded-full border-none hover:bg-red-700" type="submit" onClick={() => { modalUpdated() }}>
            {editIndex !== null ? 'Update' : 'Add'}
          </button>
        </form>
        <form onSubmit={submitTasks} className="rounded-lg bg-black-100 p-2 m-2 max-w-full h-40 flex flex-col">
          <textarea
            className="h-40 w-[100%] p-3 resize-none rounded-[10px] max-w-full border"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </form>
        <div className="relative">
          <label htmlFor="Search" className="sr-only"> Search </label>
          <input
            type="text"
            id="Search"
            placeholder="Search"
            className="w-full rounded-md border-none py-2.5 pe-10 shadow-xs sm:text-sm p-5 hover:shadow-[10px_5px_100px_-15px_rgba(0,0,255,1.0)]"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button type="button" className="text-gray-600 hover:text-gray-70 hover:bg-red-700 hover:text-white-600 border">
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
        <div className="rounded-s-md flex flex-col p-5s">
          {renderTasks()}
        </div>
        <div className="p-5">
          <button type="button" className="hover:bg-red-700" onClick={() => { logout() }}>Log out</button>
        </div>
      </div>
    </>
  );
}
export default Todo;
