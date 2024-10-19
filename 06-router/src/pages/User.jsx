import React from 'react'
import { useParams } from 'react-router-dom';
function User() {
    const param = useParams();
  return (
    <div>User is {param.username}</div>
  )
}

export default User;