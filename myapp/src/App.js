import { useState, useEffect } from 'react';
import './App.css';
import ClipLoader from "react-spinners/ClipLoader";

const App=()=>{
  const [users, setUser] = useState([]);

  
  const [loading,setLoading] = useState(false);
  useEffect=(() => {
    setLoading(true)
    setTimeout=(()=>{
      setLoading(false)
    }, 8000)
  },[])

  const loadUsers = async()=>{
    const response = await fetch("https://api.github.com/users");
    const jsonresponse = await response.json();
    setUser(jsonresponse);
  }

  return (
    <div className='App'>
      {
        loading ?
        <ClipLoader color={"#F37A24"} loading={loading} size={30} />
        :
        <div>
        <div className='spa'>
        <h1>LGM Information System</h1>
        <div className='uki'>
        <button onClick={loadUsers}>Get Users</button></div>
        </div>
        <h2 align="left">Users:</h2>
        <ul>
          {users.map(({id,login,avatar_url})=>(
            <div className='kizu'>
            <li key={id}>Name is {login} and Avatar of the user : {avatar_url}</li>
            </div>
          ))
          }
        </ul>
        </div>

      }
  </div>
  );
}

export default App;
