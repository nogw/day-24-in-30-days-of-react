import React, { useState } from 'react';
import { Container, Create, IconPlus, IconSave, Items } from './styles';
import List from '../List'

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};

function Todo() {
  const [name, setName] = useState('') 
  const [isEditing, setIsEditing] = useState(false) 
  const [editID, setEditID] = useState(null) 
  const [list, setList] = useState(getLocalStorage());
  
  const handleSubmit = e => {
    e.preventDefault();

    if (!name) {
      console.log('please enter value')
      console.log(name)
    } else if ( name && isEditing ) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name }
          } 
          return item;
        })
      );
      setName('')      
      setEditID(null)      
      setIsEditing(false)      
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  }

  const clearList = () => {
    setList([]);
  }

  const removeItem = id => {
    setList(list.filter((item) => item.id !== id))
  }

  const editItem = id => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id)
    setName(specificItem.title)
  }

  return (
    <Container>
      <Create>
        <form onSubmit={e => handleSubmit(e)}>
          <input type="text" placeholder="New todo" value={name} onChange={e => setName(e.target.value)}/>
          <button type="submit">
            {isEditing ? <IconSave/> : <IconPlus/>}
          </button>
        </form>
      </Create>
      {list.length > 0 && (
        <Items>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          
        </Items>
      )}
    </Container>
  );
}

export default Todo;