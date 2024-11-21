import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../JS/Actions/Action';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggleTask = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEditTask = () => {
    if (newDescription !== task.description) {
      dispatch(editTask(task.id, newDescription));
    }
    setIsEditing(false);
  };

  return (
    <li style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleEditTask}>Save</button>
        </div>
      ) : (
        <span>
          {task.description}{' '}
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </span>
      )}
      <button onClick={handleToggleTask}>
        {task.isDone ? 'Mark as Not Done' : 'Mark as Done'}
      </button>
    </li>
  );
};

export default Task;
