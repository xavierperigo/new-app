import './App.css';
import React from 'react';
//import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import Header from './components/Header';
import Menu from './components/Menu';
import Home from './components/Home';
import Tasks from './components/Tasks';

function App() {
  const [showTask, setShowTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      //console.log(tasksFromServer)
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:3008/api/tasks')
    const data = await res.json()

    return data;
  }

  return (
    <Router>
      <div className="App">

        <Header 
          title={'My New App'}
        />

        <Menu />

        <Redirect from='/' to='/home'/>
        <Route        
          path='/home'
          exact
          render={(props) => (
          <>
            <Home />
          </>)}
        /> 

        <Route
          path='/tasks'
          render={(props) => (
            <>
              {tasks.length > 0 ? (<Tasks tasks={tasks}/>) : ('No Tasks To Show')}
            </>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
