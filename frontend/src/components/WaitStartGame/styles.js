import styled, { keyframes } from 'styled-components';

const waiting = keyframes`
  from{
    opacity: .3;
    width: 10px;
    height: 10px;
  }

  50%{
    width: 15px;
    height: 15px;
    opacity: 1;
  }

  to{
    opacity: .3;
    width: 10px;
    height: 10px;
  }
`

export const Container = styled.div`
  .playerModal{
    position: absolute; 
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: white;
    width: 95%;
    height: 100px;
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

    .playerModal__waitIcon{
      display: flex;
      align-items: flex-end;
      margin: auto;
      position: relative;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: teal;
      animation: ${waiting} .9s infinite;
      animation-delay: .1s;

      &::after, &::before{
        position: absolute;
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: teal;
        left: -30px;
        animation: ${waiting} .9s infinite;
      }

      &::before{
        left: 30px;
        animation-delay: .2s;
      }
    }
  }
`