import React, {useState} from 'react';
import { arr } from "./tasks";
import Column from './column';
import Delete from './delete';

const Board = () => {
    const [cards, setCards] = useState(arr);
    return(
        <div className="flex h-full w-full gap-3 p-12">
            <Column
            title='Todo'
            column='todo'
            color='text-neutral-200'
            cards={cards}
            setCards={setCards}
            />
            <Column
            title='In Progress'
            column='inProgress'
            color='text-rose-200'
            cards={cards}
            setCards={setCards}
            />
            <Column
            title='Complete'
            column='completed'
            color='text-lime-200'
            cards={cards}
            setCards={setCards}
            />
            <Delete setCards={setCards} />
        </div>
    )
}

export default Board;