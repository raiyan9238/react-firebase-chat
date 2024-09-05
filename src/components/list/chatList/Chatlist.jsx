import React, { useState } from 'react'
import './chatList.css'
import { AddUser } from './addUser/addUser'

export const Chatlist = () => {
   const [addMode, setAddMode] = useState(false) 

  return (
    <div className='chatList'>
        <div className="search">
            <div className="searchBar">
                <img src="./search.png" alt="" />
                <input type="text" placeholder='Search User'/>
            </div>
            <img src={addMode?"./minus.png":  "./plus.png"} 
            alt="" 
            className='add'
            onClick={()=>setAddMode((prev)=>!prev)}
            />
        </div>
        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Iftiar Rafi</span>
                <p>Hello!</p>
            </div>
        </div>

        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Tawhid Hasan</span>
                <p>Hello!</p>
            </div>
        </div>

        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Rushnan Reaz</span>
                <p>Hello!</p>
            </div>
        </div>

        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Manhib Riyana</span>
                <p>Hello!</p>
            </div>
        </div>
        {addMode && <AddUser/>}
    </div>
  ) 
}
