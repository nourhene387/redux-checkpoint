import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../JS/Actions/Action';
//C:\Users\nourh\OneDrive\Bureau\gomycode\redux\todolist\src\JS\Actions\Action.js
const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (description) {
      dispatch(addTask({ description }));
      setDescription('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;