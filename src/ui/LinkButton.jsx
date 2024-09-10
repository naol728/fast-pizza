import React from 'react'
import { Link,useNavigate } from 'react-router-dom';

export default function LinkButton({children,to}) {
  const classname='text-blue-600 hover:text-blue-700'
  const navigate = useNavigate();
  if(to==="-1")return   <button onClick={() => navigate(-1)}className={classname}>{children}</button>

  return (
    <Link to={to} className={classname}>
      {children}
    </Link>
  )
}
