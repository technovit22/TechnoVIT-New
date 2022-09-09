import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/NavBar/NavBar'
import Card from '../components/Card/Card'
import { motion } from 'framer-motion'
import Lottie from 'react-lottie'
import animationData from '../assets/Animations/21317-wave-loop.json'
import wave  from '../assets/Images/waveGIF.gif'

export default function Home() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <>
    <div className={styles.container}>
      <Navbar/>
      
      <h2 className = {styles.titletechnoVIT}>technoVIT 22</h2>
      <Image src = {wave} width={1330} height = {300} className={styles.waveGIF}/>
      <div className = {styles.Schools}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
     {/* <section className={styles.parallaxSection}>
      <div className={[styles.wave, styles.wave1].join(" ")} ></div>
     </section> */}
    </>
  )
}
