import React, { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import { HostModal } from "../HostModal";
import { LetterInput } from "../LetterInput";
import { SecretWord } from "../SecretWord";
import { WaitStartGame } from "../WaitStartGame";
import Confetti from 'react-confetti'
import { Container } from "./styles"
import { Gibbet } from "../Gibbet";

export function Game() {
  const { game, isGameRunning, isHost, whoWon, setWhoWon } = useContext(GameContext)

  function handleReset() {
    setWhoWon(null)
  }

  if (whoWon) {
    return (
      <Container>
        <Confetti />
        <h1>{whoWon} ganhou!!!</h1>
        <button onClick={handleReset}>reset</button>
      </Container>
    )
  }

  return (
    <Container>
      {isGameRunning ?
        <>
          <div className="game__word-Container">
            <Gibbet lifes={game.lifes}/>
            <SecretWord />
          </div>
          {isHost || <LetterInput />}
        </> :
        <WaitStartGame />}
    </Container>
  )
}