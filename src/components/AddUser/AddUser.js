import React, { useState } from 'react';

const AddUser = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    
    const handleName=(e)=>{
        setName(e.target.value);
    };
    
    const handleEmail=(e)=>{
        setEmail(e.target.value);
    };

    const handlePassword=(e)=>{
        setPassword(e.target.value);
    };

   const handleAddUser=()=>{
      const data ={name,email,password};
      fetch('http://localhost:5000/addUser',{
          method:"POST",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(data),
      })
      .then((res)=>res.json())
      .then(result=>console.log(result))
   };

   
    return (
        <div>
            <h1>Add User</h1>
            <div>
                <input onChange={handleName} className='p-2 mt-3' type="text" placeholder='Name'/>
                <br/>
                <input onChange={handleEmail} className='p-2 mt-3' type="email" placeholder='Email'/>
                <br/>
                <input onChange={handlePassword} className='p-2 mt-3' type="password" placeholder='Password'/>
                <br/>
                <button onClick={handleAddUser} className='btn btn-success mt-3'>Add User</button>
            </div>
        </div>
    );
};

export default AddUser;