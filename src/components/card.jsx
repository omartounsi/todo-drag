import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Card = ({title, id, column, handleDragStart}) =>{
    return(
        <>
            <motion.div 
            layout
            layoutId={id}
            draggable='true'
            onDragStart={(e)=> handleDragStart(e, {title, id, column})}
            className="rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing hover:cursor-grab my-1">
                <p className="text-quicksand text-m text-neutral-100 font-quicksand">
                    {title}
                </p>
            </motion.div>
        </>
    )
}

export default Card;