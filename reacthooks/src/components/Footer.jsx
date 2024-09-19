import React,{useContext} from 'react'
import { AppContext } from '../context/AppContext';

export const Footer = () => {
    const {phone} = useContext(AppContext);
  return (
    <div>Footer {phone}</div>
  )
}

export default Footer