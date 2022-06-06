import React from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import styles from '../../styles/products.module.css';
import Product from './Components/Product';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(products => {
      console.log(products)
      setProducts([...products])
    })
    .catch(error => {console.log(error)})
  }, [])

  return (
    <div className={styles.productsBody}>
        <Header />
        <div className={styles.middle}>
            <div className={styles.products}>
                {products.map((product,key) => 
                  (<Product key={product.userId._id} imageUrl={product.imageUrl} price={product.price} name={product.name} product_id={product._id} />)
                )}
            </div>
        </div>
        <Footer />
    </div>
  )
}
