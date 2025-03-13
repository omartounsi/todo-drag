import React, {useState} from 'react';
import Card from './card';
import AddCard from './addcard';

const Column = ({title, color, column, cards, setCards})=>{
    const [active, setActive] = useState(false);
    const filtered = cards.filter(c => c.column == column);

    function handleDragStart(e, card){
        e.dataTransfer.setData('cardId', card.id);
    }

    function handleDragOver(e){
        e.preventDefault();
        setActive(true);
    }

    function handleDragLeave(){
        setActive(false);
    }

    function handleDrop(e) {
        const cardId = e.dataTransfer.getData('cardId');
        setCards((prev) => 
            prev.map((card) => 
                card.id === cardId ? { ...card, column } : card
            )
        );
        setActive(false);
    }

    function handleDragEnd(e){
        setActive(false);
    }

    return(
        <div 
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className="w-90 shrink-0">
            <div className="mb-3 flex items-center justify-between ">
                <h3 className={`font-medium ${color}`}>
                    {title}
                </h3>
                <span className="rounded text-lg text-neutral-300">
                    {filtered.length}
                </span>
            </div>
            <div className={`h-full w-full transition-colors ${active ? 'bg-neutral-800/50' : 'bg-neutral-800/0'}`}>
                {filtered.map((card)=>(
                    <Card 
                    handleDragStart={handleDragStart}
                    key={card.id} {...card} />
                ))}
                {filtered.length <= 0 ? <div className="flex items-center justify-center text-neutral-300 pt-5">Nothing here.</div> : <div></div>}
                <AddCard column={column} setCards={setCards} />
            </div>
        </div>
    )
}

export default Column;