import React, {useState} from "react";
import { motion, AnimatePresence } from "framer-motion";

const AddCard = ({column, setCards}) =>{
    const [text, setText] = useState('');
    const [editing, setEditing] = useState(false);

    function handleSubmit(e){
        e.preventDefault();

        if(text.trim().length == 0) return; //empty card

        const newCard = {
            column,
            title: text.trim(),
            id: Date.now().toString()
        }

        setText('');
        setEditing(false);

        setCards((c)=> [...c, newCard]);
    }

    return (
        <>
        {editing ? <AnimatePresence mode="wait"><motion.form 
        key="form"
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0}}
        exit={{ opacity: 0, scale: 0.95, x: -10 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}

        onSubmit={handleSubmit}
        >   
            <textarea
                onChange={(e)=>setText(e.target.value)}
                autoFocus
                placeholder="Add a task..."
                className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
            ></textarea>
            <div className="flex items-center justify-end gap-1.5">
                <button
                onClick={()=>setEditing(false)}
                className="text-neutral-400 text-xs py-1.5 px-3 transition hover:text-neutral-50 "
                >Close</button>
                <button className="text-neutral-600 bg-neutral-100 text-xs py-1.5 px-3 flex items-center rounded transition-colors hover:text-neutral-50 hover:bg-violet-500">Add +</button>
            </div>
        </motion.form></AnimatePresence> : (
            <motion.button 
            layout
            onClick={()=>setEditing(true)}
            className="flex place-self-center w-auto items-center gap-1 px-2 py-3 text-sm text-neutral-400 transition-colors hover:text-neutral-50 rounded mt-4"
            >+ Add Card</motion.button>
        )}
        </>
    )
}

export default AddCard;