import { createStore} from 'redux'

import rootReducer from './Reducers/RootReducers'
//C:\Users\nourh\OneDrive\Bureau\gomycode\redux\todolist\src\JS\Store.js
//C:\Users\nourh\OneDrive\Bureau\gomycode\redux\todolist\src\JS\Reducers\RootReducers.js
const store = createStore(rootReducer)

export default store;