import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './components/Home';
import Tasks from './components/Tasks';

function App() {
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

  const setRefreshTasks = async () => {
    const tasksFromServer = await fetchTasks()
    //console.log(tasksFromServer)
    setTasks(tasksFromServer)
  }

  // Fetch Task
  /*const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:3008/api/tasks/${id}`)
    const data = await res.json()
 
    return data
  }*/

  // Toggle completed
  const toggleCompleted = async (id) => {
    //const taskToToggle = await fetchTask(id)
    //const updTask = { ...taskToToggle, completed: !taskToToggle.completed }

    /*const res = await fetch(`http://localhost:3008/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })*/

    //const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  return (
    <Router>
      <div className="App">

        <Header title={'My New App'} />

        <Menu onRefresh={() => setRefreshTasks()} />

        <Redirect from='/' to='/home' />
        <Route
          path='/home' exact
          render={(props) => (
            <>
              <Home />
            </>)}
        />

        <Route
          path='/tasks'
          render={(props) => (
            <>
              {tasks.length > 0 ? (
                <Tasks tasks={tasks}
                  onToggle={toggleCompleted}
                />) : ('No Tasks To Show')}
            </>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
