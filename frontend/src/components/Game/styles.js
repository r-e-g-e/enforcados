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

  .game__playersCounter{
    display: flex;
    align-items: center;
    gap: 10px;
    align-self: flex-end;
    margin-right: 50px;
    color: white;
    font-weight: 500;
    letter-spacing: .08em;
  }

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