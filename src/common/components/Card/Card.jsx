import React from 'react'
import Div, { animations } from "../AnimatedDiv";
import {motion} from 'framer-motion';
import Image from 'next/image';

const Card = ({title, src, children}) => {

    const card = {
        normal: { width: 150, height: 150 },
        enlarged: {width: 300, height: 300, transition: {duration: 0.2}},
    }
    const text1 = {
        normal: {opacity: 0, transition: {duration: 0}},
        enlarged: {opacity: 1, transition: {duration: 0.5}},
    }
    const image = {
        normal: {display: 'block'},
        enlarged: {display: 'none', transition: {duration: 0.2}},
    }



  return (
    <Div initial="cardRest" whileHover = "cardHover">
        <Div className='bg-cyan-500 overflow-hidden br rounded-md' variants = {card} initial="normal" whileHover = "enlarged">
            <motion.div variants = {image}>
                <Image src = {src}/>
            </motion.div>
            <motion.div variants = {text1} >{title}</motion.div>
            <motion.div  variants={text1}>{children}</motion.div>
        </Div>
    </Div>
  )
}

export default Card