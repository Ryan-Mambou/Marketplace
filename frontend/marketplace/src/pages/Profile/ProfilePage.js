import React from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import styles from '../../styles/profile.module.css';
import profile from '../../assets/images/air jordan 1.PNG';
import Comment from './Components/Comment';
import Modal from '../../common/Modal';
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineAddCircle } from "react-icons/md";
import { TbMessages } from "react-icons/tb";
import { useState } from 'react';
import { useEffect } from 'react';
import { MdEmail, MdPhoneEnabled} from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
    const [showModal, setShowModal] = useState();
    const [user, setuser] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        getUser()
    }, []);

    const getUser = () => {
        fetch(`http://localhost:3000/api/auth/${JSON.parse(localStorage.getItem('userInfo')).userId}`)
        .then(response => response.json())
        .then(user => {
            console.log(user)
            setuser(user)
        })

    }

  return (
    <div>
        <Header />
        <div className={styles.middle}>
        <div className={styles.wholeCard}>
        <div className={styles.profileCard}>
            <div className={styles.profilePicture}>
                <img src={profile} alt='profile-picture' style={{width: '150px', height: '150px', borderRadius: '50%'}}/>
                <span style={{marginTop: '15px', backgroundColor: '#007BFF', padding: '10px', borderRadius: '50%'}}><FaRegEdit style={{color: 'white', fontWeight: '800', cursor: 'pointer'}} /></span>
            </div>
            <div className={styles.otherPart}>
                <div className={styles.userInfo}>
                    <span style={{fontSize: '40px', color: 'white'}}>{user.username}</span>
                    <span style={{color: '#999999', fontSize: '18px', paddingTop:'10px', display: 'flex', alignItems: 'center'}}><MdEmail style={{marginRight: '5px'}}/> {user.email}</span>
                    <span style={{color: '#999999', fontSize: '18px', paddingTop:'10px', display: 'flex', alignItems: 'center'}}><MdPhoneEnabled style={{marginRight: '5px'}}/> {user.number}</span>
                </div>
                <div className={styles.icons}>
                    <div className={styles.iconBox}>
                        <span className={styles.icon}><MdOutlineAddCircle onClick={() => {showModal ? setShowModal(false) : setShowModal(true)}} /></span>
                        <span style={{paddingTop: '10px'}}>Add Product</span>
                    </div>
                    <div className={styles.iconBox}>
                        <span className={styles.icon}><TbMessages /></span>
                        <span style={{paddingTop: '10px'}}>Send Message</span>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.home}>
            <span className={styles.homeText} onClick={(e) => {
                e.preventDefault()
                navigate(`/products`)
            }}>Home</span>
        </div>
        </div>
        </div>
        {showModal && <Modal closeModal={() => setShowModal(false)} />}
        <Comment />
        <Footer />
    </div>
  )
}
