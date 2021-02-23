import styled from 'styled-components';
import { BiPlus } from 'react-icons/bi'
import { BiSave } from 'react-icons/bi'

export const Container = styled.div`
  background-color: #0D0D1D;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 32px 16px;
  border-radius: 8px;
  box-shadow: 0px 5px 15px 5px rgba(0,0,0,0.2)
`;

export const Create = styled.div`
  form {
    display: flex;
  
    input {
    border-radius: 50px;
    border: none;
    padding: 0px 15px;
    width: 180px;
    height: 30px;
    font-weight: bold;
    outline: none;
    margin: 5px;
  
    &::placeholder {
      color: #0D0D1D;
      opacity: 1;
      font-weight: bold;
    }
  }

    button {
      margin: 5px;
      height: 30px;
      outline: none;
      width: 30px;
      background-color: #863ED8;
      justify-content: center;
      align-items: center;
      display: flex;
      border: none;
      cursor: pointer;
      border-radius: 50px;
    }
  }
`;

export const IconPlus = styled(BiPlus)`
  color: #fff;
  font-size: 25px;
`; 

export const Items = styled.div`
  
`; 

export const IconSave = styled(BiSave)`
  color: #fff;
  font-size: 20px;
`; 