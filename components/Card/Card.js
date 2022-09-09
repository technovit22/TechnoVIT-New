import React from 'react'
import { motion } from 'framer-motion'
import styles from './Card.module.css'



const Card = () => {

    const cardHover = {
        scale: 1.2,
        backgroundColor: "#1126c2",
    }

  return (
    
        <motion.div whileHover = { cardHover } className = {styles.card}></motion.div>
  )
}

export default Card