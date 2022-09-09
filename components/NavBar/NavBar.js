import React from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image';
import technoVITlogo from '../../assets/Images/TechnoVITLogo.webp'
import { motion } from 'framer-motion';

const NavBar = () => {

  const hoverProperties = {
    scale: 1.2,
    textShadow: "0px 0px 9px rgb(23, 130, 107)",
    boxShadow: "0px 0px 9px rgb(23, 130, 107  )",

  } 

  return (
    
    <div className = {styles.navbar}>
      
        <Image src={technoVITlogo} width={170} height= {75}/>
        <ul>
            <motion.li whileHover = {hoverProperties}>Home</motion.li>
            <motion.li whileHover = {hoverProperties}>About</motion.li>
            <motion.li whileHover = {hoverProperties}>Venue</motion.li>
            <motion.li whileHover = {hoverProperties}>School Fests</motion.li>
            <motion.li whileHover = {hoverProperties}>Gallery</motion.li>
            <motion.li whileHover = {hoverProperties}>Sponsors</motion.li>
        </ul>
    </div>
  )
}

export default NavBar