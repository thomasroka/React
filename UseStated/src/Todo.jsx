import React, { useState } from 'react';

const Todo = () => {
  const [task, setTask] = useState('');
  const [todo, setTodo] = useState([]);
  const [selected, setSelected] = useState([]);
  const [change, setChange] = useState('');
  const [edit, setEdit] = useState(false);
  const [updateid, setUpdateid] = useState(null);

  // ADD TASK
  function todochange() {
    const newTasks = {
      data: task,
      id: Date.now(),
    };

    setTodo([...todo, newTasks]);
    setTask('');
  }

  // DELETE SELECTED
  function changeDelete(selected_ids) {
    setTodo(todo.filter(items => !selected_ids.includes(items.id)));
    setSelected([]);
  }

  // SELECT / UNSELECT
  function handleSelect(id) {
    setSelected(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  }

  // START EDIT (click paragraph)
  function startEdit(id, text) {
    setUpdateid(id);
    setEdit(true);
    setChange(text);
  }

  // UPDATE TASK
  function editTask() {
    setTodo(prev =>
      prev.map(item =>
        item.id === updateid
          ? { ...item, data: change }
          : item
      )
    );

    setEdit(false);
    setUpdateid(null);
    setChange('');
  }

  return (
    <div>

      {/* INPUT */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <p>You added: {task}</p>

      {/* LIST */}
      {todo.map((ele) => (
        <div key={ele.id}>

          {/* CHECKBOX */}
          <input
            type="checkbox"
            checked={selected.includes(ele.id)}
            onChange={() => handleSelect(ele.id)}
          />

          {/* TEXT / EDIT MODE */}
          {edit && updateid === ele.id ? (
            <input
              value={change}
              onChange={(e) => setChange(e.target.value)}
            />
          ) : (
            <p onClick={() => startEdit(ele.id, ele.data)}>
              {ele.data} (id: {ele.id})
            </p>
          )}

        </div>
      ))}

      {/* BUTTONS */}
      <button onClick={todochange}>Add Task</button>
      <button onClick={() => changeDelete(selected)}>Delete Selected</button>
      <button onClick={editTask}>Update</button>

    </div>
  );
};

export default Todo;
