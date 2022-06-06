import React from 'react';
import { useState } from 'react';
import pic from '../../../assets/images/air jordan 1.PNG';
import styles from '../../../styles/comment.module.css'

export default function Comment() {
  const [comment, setComment] = useState();

  const handleChange = (event) => {
    setComment(event.target.value);
  }

  return (
    <div className={styles.comments}>
        <div className={styles.comment}>
            <img className={styles.img} src={pic} alt="profile"/>
            <div className={styles.userComment}>
                <span style={{padding: '10px', fontWeight: '700'}}>Username</span>
                <span style={{padding: '10px'}}>Comment</span>
            </div>
        </div>
        <label htmlFor='comment'>Write a review about user</label>
        <input placeholder='Review....' onChange={handleChange} value={comment}/>
    </div>
  )
}
