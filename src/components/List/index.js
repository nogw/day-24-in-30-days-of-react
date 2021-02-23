import React, { useState } from 'react';
import { Container, Edit, Trash, Item, Title, Buttons } from './styles';

function List({ items, removeItem, editItem }) {
  var color = ['#e56d8c', '#867ae7', '#dc7444', '#C196E4', '#ecb22e', '#e01e5a', '#30b47d']
  var index = 0

  const getColor = () => {
    if ( index < 6 ) {
      index += 1
    } else {
      index = 0
    }
    return color[index]
  }

  return (
    <Container>
      {
        items.map((item) => {
          const { id, title } = item
          return (
            <Item bgc={getColor()}>
              <Title>
                {title}
              </Title>
              <Buttons>
                <button onClick={() => editItem(id)}>
                  <Edit />
                </button>
                <button onClick={() => removeItem(id)}>
                  <Trash />
                </button>
              </Buttons>
            </Item>
          )
        })
      }
    </Container>
  );
}

export default List;