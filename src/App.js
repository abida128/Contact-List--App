import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Components/Contacts';
import  { useState, useEffect} from "react";



import './App.css';



const App = () => {
  

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch Api 
      fetch('https://randomuser.me/api/?results=10')
      .then(results => results.json())
      .then(data =>{
          console.log(data)
          setUsers(data.results);
      });

  },[])

  return (
    <>    
    <div className="header">Contact Listing App</div>
    
      {users.map(user => (
        <Cards
           
          image={user.picture.medium} 
          name = {user.name.first + "" + user.name.last} 
          email = {user.email} 
          nationality={user.nat} 
          age = {user.dob.age} 
        />
        
        
      ))}

    </>
);

}




export default App;
