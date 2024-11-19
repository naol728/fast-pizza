import React from 'react'
import CreateUser from '../features/user/CreateUser';
import { useSelector } from 'react-redux';
import Button from './Button';
function Home() {
 const username= useSelector(state=>state.user.username)

  return (
    <div className='my-10 text-center mx-4 sm:my-16 '>
      <h1 className=' text-center text-xl font-semibold mb-4 md:text-3xl'>
        The best pizza.
        <br />
        <span className='text-yellow-500'>  
        Straight out of the oven, straight to you.
        </span>
      </h1>
      {username==="" ? <CreateUser />:<Button to="/menu" type="primary">continue ordering {username}</Button>}
    </div>
  );
}

export default Home;
