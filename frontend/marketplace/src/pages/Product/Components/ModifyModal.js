import React from 'react'
import Backdrop from '../../../common/Backdrop';
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from 'axios';
import { useState } from 'react';
import '../../../styles/Modal.css';

export default function ModifyModal({closeModal}) {
    const [values, setValues] = useState({
        name: '',
        description: '',
        price: '',
    })

    const [file, setFile] = useState();
    const [selectedValue, setSelectedValue] = useState('shoes');

    axios.interceptors.request.use(
        config => {
            config.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`;
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );

    const handleSelect = (event) => {
        setSelectedValue(event.target.value);
    }

    console.log(selectedValue)

    const handleFileChange = (event) => {
        setFile(event.target.files[0])
    }

    const handleChange = (event) => {
        setValues(values => ({
            ...values,
            [event.target.name] : event.target.value,
        }));
    }

  return (
    <Backdrop closeModal={closeModal}>
         <div className='modal' onClick={(e) => e.stopPropagation()}>
             <div className='top'>
                 <span style={{fontSize: '22px', fontWeight: '700'}}>Modify Product</span>
                 <AiOutlineCloseCircle style={{fontSize: '20px', cursor: 'pointer'}} onClick={closeModal}/>
             </div>
             <div className='content'>
                 <label htmlFor='name'>Name or product brand</label>
                 <textarea id='name' name='name' placeholder='Enter name or brand e.g Nike Shoe' onChange={handleChange}></textarea>
                 <label htmlFor='description'>Description</label>
                 <textarea id='description' name='description' placeholder='Enter description' onChange={handleChange}></textarea>
                 <label htmlFor='category'>Category</label>
                 <select name='categories' id='categories' style={{marginTop: '5px', width: '20%', padding:'5px'}} onChange={handleSelect}>
                <option value='shoes'>shoes</option>
                <option value='dresses'>dresses</option>
                <option value='accesories'>accesories</option>
                <option value='electronics'>electronics</option>
                <option value='utensils'>utensils</option>
                <option value='books'>books</option>
            </select>
                 <label htmlFor='price'>Price</label>
                 <textarea id='price' name='price' placeholder='Enter price' onChange={handleChange}></textarea>
                 <label htmlFor='uplaod-product' className='uplaod-productLabel'>Uplaod product Image</label>
             <input id='uplaod-product' name='image' type='file' className='uplaod-productInput' onChange={handleFileChange}></input>
                 <button className='postButton' >Post</button>
             </div>
         </div>
     </Backdrop>
  )
}
