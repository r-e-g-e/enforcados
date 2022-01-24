import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  width: 95%;
  max-width: 1200px;
  margin: auto;
  
  .modalWin{
    background-color: white;
    width: 95%;
    max-width: 300px;
    padding: 25px 40px;
    border-radius: 5px;
    box-shadow: 3px 3px 32px rgba(0, 0, 0, 0.3), 1px 1px 10px rgba(0, 0, 0, 0.1);
    text-align: center;

    h1{
      margin-top: 0;
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
        
      &:active{
        box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.5);
      }
    }
  }
`