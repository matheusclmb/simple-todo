import { useState } from "react";
import styles from "./todoapp.module.scss";

export const ToDoApp = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text: todo,
        completed: false,
      },
    ]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") return;
    addTodo();
    setTodo("");
  };

  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === todoId
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <form onSubmit={onSubmit}>
          <label htmlFor="todo">Add a new task</label>
          <br />
          <input
            id="todo"
            className={styles.todo_input}
            onChange={handleChange}
            value={todo}
          />
          <button type="submit" className={styles.add_btn}>
            Add
          </button>
        </form>
        <div className={styles.todolist}>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <span
                  className={todo.completed ? "todo-completed" : undefined}
                  onClick={() => toggleTodo(todo.id)}
                >
                  {todo.text}
                </span>
                <span
                  className={styles.delete_btn}
                  onClick={() => removeTodo(todo.id)}
                >
                  x
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
