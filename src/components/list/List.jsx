import React from 'react'
import './list.css'
import { UserInfo } from './userInfo/UserInfo'
import { Chatlist } from './chatList/Chatlist'
export const List = () => {
  return (
    <div className='list'>
        <UserInfo/>
        <Chatlist/>
    </div>
  )
}
