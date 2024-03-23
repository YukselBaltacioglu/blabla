import React from 'react';
import Navbar from '../Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';
import Image from '../Image/Image';
import ButtonBox from '../ButtonBox/ButtonBox';
import styles from './Layout.module.css';
import { faMagnifyingGlass,faUpload, faFileImage,faCircleCheck, faChartLine} from '@fortawesome/free-solid-svg-icons';


const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.right_part}>
        <Dashboard />
        <div className={styles.image_container}>
          <Image src={"https://assets.turbologo.ru/blog/ru/2021/10/16033551/creative-logo-10.png"} width={220} height={200} />
          <Image src={"https://assets.turbologo.ru/blog/ru/2021/10/16033623/creative-logo-11.png"} width={220} height={200} />
          <Image src={"https://assets.turbologo.ru/blog/ru/2021/10/16033521/creative-logo-8.png"} width={220} height={200} />
          <Image src={"https://assets.turbologo.ru/blog/ru/2021/10/16033456/creative-logo-9.png"} width={220} height={200} />
          <Image src={"https://assets.turbologo.ru/blog/ru/2021/10/16033427/creative-logo-7.png"} width={220} height={200} />
          <div className={styles.how}>How it works</div>
        </div>
        <div className={styles.button_container}>
          <ButtonBox 
            icon={faMagnifyingGlass}
            title = {"Choose a trademarkt to searchfor"}
            description={"Our AI-powered image recognation technology can instantly find similar trademarkts"}
            link={"#"}
          />
          <ButtonBox 
            icon={faUpload}
            title = {"Upload an image or choose one of ours"}
            description={"It's fast, easy and free"}
            link={"#"}
          />
          <ButtonBox 
            icon={faFileImage}
            title = {"We'll find similar trademarkts"}
            description={"Try our advanced search options to find exactly what you're looking for"}
            link={"#"}
          />
          <ButtonBox 
            icon={faCircleCheck}
            title = {"View results and get insights"}
            description={"Get detailed insights on any trademarkt. View similar trademarkts , see how they are used, and more"}
            link={"#"}
          />
          <ButtonBox 
            icon={faChartLine}
            title = {"Analyze trends over time"}
            description={"Track how a trademarkt is being used over time. Identify new trends and opportunities"}
            link={"#"}
          />
       
        </div>
       
      </div>
      
    </div>
  );
};

export default Layout;