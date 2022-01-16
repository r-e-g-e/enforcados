import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
  width: 90%;
  max-width: 1300px;
  margin: auto;

  button{
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
    width: 44px;
    height: 44px;
    padding: 10px 13px;
    border-radius: 5px;
    border: none;
    box-shadow: 0.5px 2px 5px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    background-color: white;
  }

  button:active{
    box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.3);
  }

  button.used{
    background-color: #ffa400;
    color: white;
    box-shadow: none;
  }

  button:disabled{
    opacity: .8;
    box-shadow: none;
    cursor: auto;
  }

  button.used:disabled{
    opacity: .65;
  }
`