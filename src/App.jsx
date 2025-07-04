import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/Store'
import Taskform from './component/Taskform'
import Tasklist from './component/Tasklist'

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Task Manager</h1>
        <Taskform/>
        <Tasklist />
      </div>
    </Provider>
  )
}

export default App
