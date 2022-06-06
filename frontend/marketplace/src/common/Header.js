import logo from '../assets/images/logo_light.png';
import React from 'react';
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import '../styles/Header.css';
import { useNavigate } from 'react-router-dom';

export default function () {
  const navigate = useNavigate();

  console.log(JSON.parse(localStorage.getItem('userInfo')).userId)

  const userId = JSON.parse(localStorage.getItem('userInfo')).userId;

  return (
    <div className='header'>
        <div className='logo'>
           <img src={logo} alt='logo'/>
        </div>
        <div className='search'>
            <select name='categories' id='categories'>
                <option value='shoes'>shoes</option>
                <option value='dresses'>dresses</option>
                <option value='accesories'>accesories</option>
                <option value='electronics'>electronics</option>
                <option value='utensils'>utensils</option>
                <option value='books'>books</option>
            </select>
            <button>Search</button>
        </div>
        <div className='profile'>
          <AiOutlineUser style={{fontSize: '40px', cursor: 'pointer'}} onClick={() => {navigate(`/profile/${userId}`)}}/>
          <span>Profile</span>
        </div>
    </div>
  )
}
