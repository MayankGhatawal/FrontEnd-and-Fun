import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="App">
      <h1>GitHub Users</h1>
      <div className="users">
        {users.map(user => (
          <div key={user.id} className="card">
            <img src={user.avatar_url} alt={`${user.login} avatar`} />
            <h3>{user.login}</h3>
            <p>
              <a href={user.followers_url} target="_blank" rel="noopener noreferrer">Followers</a>
            </p>
            <p>
              <a href={`https://github.com/${user.login}?tab=following`} target="_blank" rel="noopener noreferrer">Following</a>
            </p>
            <button onClick={() => window.open(user.html_url, "_blank")}>View Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
