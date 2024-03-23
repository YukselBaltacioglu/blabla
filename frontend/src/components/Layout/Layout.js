import React from 'react';
import Navbar from '../Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';
import Image from '../Image/Image';
import ButtonBox from '../ButtonBox/ButtonBox';
import styles from './Layout.module.css';


const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.right_part}>
        <Dashboard />
        <div className={styles.image_container}>
          <Image src={"https://marmaracicek.com/urunler/renkli-cicek-buketi-copy.jpg"} width={200} height={200} />
          <Image src={"https://marmaracicek.com/urunler/renkli-cicek-buketi-copy.jpg"} width={200} height={200} />
          <Image src={"https://marmaracicek.com/urunler/renkli-cicek-buketi-copy.jpg"} width={200} height={200} />
          <Image src={"https://marmaracicek.com/urunler/renkli-cicek-buketi-copy.jpg"} width={200} height={200} />
          <Image src={"https://marmaracicek.com/urunler/renkli-cicek-buketi-copy.jpg"} width={200} height={200} />
        </div>
        <ButtonBox />
       
      </div>
      
    </div>
  );
};

export default Layout;