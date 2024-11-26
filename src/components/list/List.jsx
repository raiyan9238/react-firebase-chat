import React from 'react'
import './list.css'
import  UserInfo  from './userInfo/UserInfo'
import  Chatlist  from './chatList/Chatlist'
import { auth } from '../../lib/firebase'

const List = () => {
  return (
    <div className='list'>
        <UserInfo/>
        <Chatlist/>
    </div>
  )
}
export default List