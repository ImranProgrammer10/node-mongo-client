import React, { useEffect, useState } from 'react';

const Home = () => {
    const [users,setUser]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/users")
        .then(res=>res.json())
        .then(result=>setUser(result))
    },[])



    const handleDelete=id=>{
        const url=`http://localhost:5000/users/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount){
                alert('Deleted Successfully')
                const remaining=users.filter(user=>user._id !==id);
                setUser(remaining);
            }
        })

    }
    return (
      
        <div>
            <h1>Welcome To Home Page</h1>
            <div className='allusers'>
                <div className='row'>

                {
                    users?.map(user =>(
                        <div className='col-md-4'>
                            <div className='user border border p-2 m-2'>
                            <h1>{user.name}</h1>
                            <h6>{user.email}</h6>
                            <h6>{user.password}</h6>
                            <button onClick={()=>handleDelete(user._id)} className='btn btn-danger m-2 p-1' >Delete</button> 
                            <button className='btn btn-success m-2 p-1' >Update</button> 
                          
                            </div>

                        </div>
                      

                    )  
                       
                       
                     )
                } 
              

                </div>

            </div>
            
        </div>
    );
};

export default Home;