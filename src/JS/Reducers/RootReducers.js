import { ADD_TASK, EDIT_TASK, TOGGLE_TASK, SET_FILTER } from '../Actions/Action';
//C:\Users\nourh\OneDrive\Bureau\gomycode\redux\todolist\src\JS\Actions\Action.js
const initialState = {
  tasks: [],
  filter: 'all', // can be 'all', 'done', or 'notDone'
};

const RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { ...action.payload, id: Date.now(), isDone: false },
        ],
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id
            ? { ...task, description: action.payload.description }
            : task
        ),
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, isDone: !task.isDone }
            : task
        ),
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default RootReducer;
