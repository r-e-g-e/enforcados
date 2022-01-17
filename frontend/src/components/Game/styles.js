import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  width: 95%;
  margin: auto;

  .game__word-Container{
    display: flex;
    align-items: flex-end;
    justify-content: center;
    max-width: 1200px;
    gap: 80px;

    @media screen and (max-width: 1100px){
      gap: 50px;
    }

    @media screen and (max-width: 900px){
      gap: 30px;
    }
  }

`