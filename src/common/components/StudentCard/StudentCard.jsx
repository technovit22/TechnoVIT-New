import React from 'react'
import Div, { animations } from "../AnimatedDiv";
import {motion} from 'framer-motion';
import Image from 'next/image';
import poster from '../../../../public/assets/clashRoyale.webp'

const Card = ({name, email, number, src, children}) => {

    const card = {
        rest: { width: 200, height: 200 },
        hover: {width: 200, height: 200},
    }
    const text1 = {
        rest: {opacity: 0, transition: {duration: 0}},
        hover: {opacity: 1, transition: {duration: 0.5}},
    }
    const student = {
        rest: {display: 'block'},
        hover: {display: 'none', transition: {duration: 0.2}},
    }



  return (
    <Div initial="cardRest" whileHover = "cardHover">
        <Div className='bg-cyan-500 overflow-hidden rounded-md text-center ' variants = {card} initial="rest" whileHover = "hover">
            <motion.div variants = {student} className="relative">
                <Image src = {src}  width={200} height = {200} className=""/>
            </motion.div>
                <div className = "text-sm my-[20%]">
                    <motion.div  variants={text1}>{name}</motion.div>
                    <div className="mt-[1.5em]">
                        <motion.div variants={text1}>Email: {email}</motion.div>
                        <motion.div variants={text1}>Phone No.: {number}</motion.div>
                    </div>
                </div>     
        </Div>
    </Div>
  )
}

export default Card