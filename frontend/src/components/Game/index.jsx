import React, { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import { LetterInput } from "../LetterInput";
import { SecretWord } from "../SecretWord";
import { WaitStartGame } from "../WaitStartGame";
import Confetti from 'react-confetti'
import { Container } from "./styles"
import { Gibbet } from "../Gibbet";
import { PlayersCounter } from "../PlayersCounter";

export function Game() {
  const { game, isGameRunning, whoWon, setWhoWon } = useContext(GameContext)

  function handleReset() {
    setWhoWon(null)
  }

  if (whoWon) {
    return (
      <Container>
        <Confetti width="100%" />
        <PlayersCounter />
        <h1>{whoWon} ganhou!!!</h1>
        <button onClick={handleReset}>reset</button>
      </Container>
    )
  }

  return (
    <Container>
      {isGameRunning ?
        <>
          <PlayersCounter />
          <div className="game__word-Container">
            <Gibbet lifes={game.lifes} />
            <SecretWord />
          </div>
          <LetterInput />
        </> :
        <WaitStartGame />}
    </Container>
  )
}