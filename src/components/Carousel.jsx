import {motion} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "../assets/images";
export const Carousel = () => {
    console.log(images)
    return(
        <>
        
        <motion.div className="carousel">
            <motion.div className="inner-carousel">

            </motion.div>

        </motion.div>
        
        </>
    )
}
console.log("images")