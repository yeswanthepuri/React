import React from 'react'
import Profile from './Profile';

const Header = ({newfu, number}) => {
    console.log(number)

    newfu(number);
    console.warn("Header")
  return (
    <>
    <div>header</div>
    <Profile></Profile>
    </>
  )
}

export default React.memo(Header) 