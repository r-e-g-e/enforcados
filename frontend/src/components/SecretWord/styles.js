import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  max-width: 800px;

    .word__letter{
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      font-size: 65px;
      text-transform: uppercase;
      font-weight: 600;
      text-align: center;
      height: 82px;
      width: 70px;
      color: white;
      flex-shrink: 0;

      &::after{
        display: block;
        content: '';
        height: 7px;
        width: 100%;
        background-color: white;
        flex-shrink: 0;
        border: none;
        border-radius: 5px;

        @media screen and (max-width: 900px){
          height: 5px;
        }
      }

      @media screen and (max-width: 900px){
        font-size: 35px;
        height: 52px;
        width: 40px;
      }
    }
`