  import { useState } from 'react';
  import * as C from './App.styles';
  import { Item } from './types/Item';
  import { ListItem } from './components/ListItem';
  
  const App = () => {
    const [list, setList] = useState<Item[]>([
      {id: 1, name: 'Comprar pão na padaria', done: false},
      {id: 2, name: 'Pagar net', done: false},
      {id: 3, name: 'Compra semanasal do mercado', done: false},

    ]);


    return (
      <C.Container>
        <C.Area>
          <C.Header>
            Lista de Tarefas
          </C.Header>

          {/* Area de add nova tarefa */}


          {list.map((item, index)=>(
            <div>
              <ListItem key={index} item={item} />
            </div>
          ))}

        </C.Area>
      </C.Container>
    );
  }

  export default App;