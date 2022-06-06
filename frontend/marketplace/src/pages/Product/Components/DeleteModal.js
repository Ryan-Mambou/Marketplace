import React from 'react'
import Backdrop from '../../../common/Backdrop';
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from '../../../styles/delete.module.css'

export default function DeleteModal({closeModal}) {
  return (
    <Backdrop closeModal={closeModal}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.top}>
                 <span style={{fontSize: '22px', fontWeight: '700'}}>Delete Product</span>
                 <AiOutlineCloseCircle style={{fontSize: '20px', cursor: 'pointer'}} onClick={closeModal}/>
             </div>
             <div className={styles.content}>
                 <span>Are you sure you want to delete this product?</span>
                 <div className={styles.buttons}>
                     <button className={styles.cancel} onClick={closeModal}>Cancel</button>
                     <button className={styles.delete}>Delete</button>
                 </div>
             </div>
             </div>
    </Backdrop>
  )
}
