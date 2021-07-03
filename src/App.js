import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

import { useState, useEffect } from 'react';

import Header from './components/Header';
import Menu from './components/Menu';
import Home from './components/Home';
import Tasks from './components/Tasks';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const [tasks, setTasks] = useState([]
  )

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

      <Header title={'My New App'}/>

      <Menu />
      
      <Home title={'My Home'}/>
      <Tasks tasks={tasks}/>
    </div>
    </Router>
  );
}

export default App;
