import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;

    .word__letter{
      display: flex;
      flex-direction: column;
      font-size: 65px;
      text-transform: uppercase;
      font-weight: 600;
      text-align: center;
      width: 70px;
      color: white;

      &::after{
        display: block;
        content: '';
        height: 7px;
        width: 100%;
        background-color: white;
        flex-shrink: 0;
        border: none;
        border-radius: 5px
      }
    }
`