import React, { useState } from 'react'
import './Project.css';
import { Users } from './Users';
import { ArrangeUser } from './ArrangeUser';

export const Project = () => {
const [query, setQuery] = useState(""); 

const keys = ["lastName", "firstName"]

const search = (data) =>{
  return data.filter(
    (item) => 
    keys.some((key) => item[key].toLowerCase().includes(query))
  );
};

  return (
    <div className='main'>
        <input type='text' placeholder='Search by name...' className='search' onChange={(event) => setQuery(event.target.value)}/>
        <div className='arrange' >
          <ArrangeUser data={search(Users)}/>
        </div>
    </div>
  )
}
