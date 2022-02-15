import { useState } from 'react';
import * as C from './styles';
import {Item} from '../../types/Item';


type Props = {
    item: Item
}

export const ListItem = ({ item }: Props) => {
    const [isChecked, setIsCheked] = useState(item.done);


    return (
        <C.Container done={isChecked}>
             <input 
             type="checkbox" 
             checked={isChecked}
             onChange={e => setIsCheked(e.target.checked)}
             
             />


             <label>
                {item.name}
             </label>
        </C.Container>
    )
}
