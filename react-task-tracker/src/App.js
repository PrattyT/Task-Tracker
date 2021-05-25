
import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


import './App.css';

function App() {
   const [tasks, setTasks] = useState([
{
    id: 1,
    text: 'Dcotors appointment',
    day: 'feb 5',
    reminder: true,
},
{
    id: 2,
    text: 'meeting at school',
    day: 'feb 6',
    reminder: false,
},
])
  return (
    <div className="container">
      <Header />
      <Tasks tasks= {tasks}/>
    </div>
  );
}

export default App;
