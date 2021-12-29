import { useEffect, useState } from 'react';

import './App.css';

import UserCard from './UserCard/UserCard';

function App() {
  const [usersData, setUsersData] = useState([]);

  // const dummy = [
  //   {id: 1, name: "John Doe", username: "john.doe", email: "john.doe@example.com"},
  //   {id: 2, name: "Jane Doe", username: "jane.doe", email: "jane.doe@example.com"},
  //   {id: 3, name: "Richard Roe", username: "richard.roe", email: "richard.roe@example.com"}
  // ];

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsersData(data))
  }, [])

  return (
    <div className='App'>
      <h1>Employee List</h1>
      <div className='Container'>
        {usersData.map((user) => {
          return <UserCard user={user}/>
        })}
      </div>
    </div>
  )
}

export default App;
