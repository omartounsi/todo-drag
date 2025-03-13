import React, {useState} from 'react';
import { FaRegTrashCan } from "react-icons/fa6";

const Delete = ({setCards}) => {
    const [active, setActive] = useState(false);

    function handleDragOver(e){
        e.preventDefault();
        setActive(true)
    }

    function handleDragLeave(){
        setActive(false);
    }

    function handleDragEnd(e){
        const cardId = e.dataTransfer.getData("cardId");
        setCards((prev)=> prev.filter((c)=>c.id!==cardId));
        setActive(false);
    }

    return(
        <div 
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDragEnd}
        className={`grid h-60 w-60 shrink-0 place-content-center rounded-2xl border text-3xl mt-50 ml-10 transition ${
            active ? 'border-red-800 bg-red-700/20' : 'border-neutral-500 bg-neutral-500/20 text-neutral-500'
            }`}><FaRegTrashCan /></div>
    )
}

export default Delete;