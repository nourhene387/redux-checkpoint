import React from 'react';
import { Provider } from 'react-redux'; 
import AddTask from './Components/Addtask'
import ListTask from './Components/ListTask';
import store from './JS/Store';
import './App.css'
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>ToDo Application</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;
