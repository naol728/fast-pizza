import { useRouteError } from 'react-router-dom';
import React from 'react'
import LinkButton from './LinkButton'
function NotFound() {

  const error=useRouteError()
console.log(error)
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.message || error.data}</p>
    <LinkButton to="-1" >&larr; back</LinkButton>
    </div>
  );
}

export default NotFound;
