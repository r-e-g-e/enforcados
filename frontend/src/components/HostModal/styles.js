import styled from 'styled-components';

export const Container = styled.div`
  position: absolute; 
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: white;
  width: 95%;
  max-width: 400px;
  padding: 25px 40px;
  border-radius: 5px;
  box-shadow: 3px 3px 32px rgba(0, 0, 0, 0.3), 1px 1px 10px rgba(0, 0, 0, 0.1);
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2{
    margin: 0;
    text-align: center;
    color: #555555;
  }

  input{
    margin-top: 15px;
    font-size: 25px;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 5px 10px;
    text-align: center;
    border: none;
    border-bottom: 4px solid gray;
    outline: none;
  }

  input:focus{
    border-color: green;
  }

  input::placeholder{
    color: gray;
    font-size: 20px;
    text-transform: initial;
  }

  button{
    background-color: teal;
    color: white;
    font-size: 20px;
    padding: 8px 10px;
    border-radius: 3px;
    border: none;
    box-shadow: 0.5px 2px 5px rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }

  button:active{
    box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.5);
  }

  button:disabled{
    background-color: #0b5858ad;
    box-shadow: none;
    cursor: auto;
  }
`