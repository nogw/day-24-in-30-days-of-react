import styled from 'styled-components';
import { BiEditAlt, BiTrashAlt } from 'react-icons/bi'
 
export const Container = styled.div`
  
`;
 
export const Edit = styled(BiEditAlt)`
  color: #6c6c81;
`;
 
export const Trash = styled(BiTrashAlt)`
  color: #6c6c81;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  width: 220px;
  border-left: 2px solid ${props => props.bgc};
  border-radius: 3px;
  margin-top: 20px;
`;

export const Title = styled.h1`
  font-size: 12px;
  color: #fff;
  margin-right: auto;
  margin-left: 10px;
  word-break: break-all;
`;

export const Buttons = styled.div`
  display: flex;

  button {
    display: flex;
    background-color: #1d1d30;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 26px;
    width: 26px;
    border-radius: 15px;
    border: none;
    margin-left: 5px;
  }
`;

