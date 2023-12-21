import React, { useState, useEffect } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  const addTodo = (todoText) => {
    if (todoText) {
      const newTodos = [
        ...todos,
        {
          text: todoText,
          completed: false,
        },
      ];
      setTodos(newTodos);
      updateLocalStorage(newTodos);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTodo(inputText);
    setInputText('');
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    updateLocalStorage(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    updateLocalStorage(newTodos);
  };

  const updateLocalStorage = (newTodos) => {
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 shadow-md rounded">
      <form onSubmit={handleFormSubmit} className="mb-4">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Add a new todo"
          className="w-full text-black px-3 py-2 border rounded-xl"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-black hover:text-white focus:outline-none focus:shadow-outline-blue mt-6 ml-24 md:ml-40"
        >
          Add
        </button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`text-white border-2 rounded-3xl p-3 mb-2 cursor-pointer ${
              todo.completed ? 'line-through text-white bg-black' : 'bg-gray-500'
            }`}
            onClick={() => toggleTodo(index)}
            onContextMenu={(e) => {
              e.preventDefault();
              removeTodo(index);
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
