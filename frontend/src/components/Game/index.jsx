import React, { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import { LetterInput } from "../LetterInput";
import { SecretWord } from "../SecretWord";
import { WaitStartGame } from "../WaitStartGame";
import { Container } from "./styles"
import { Gibbet } from "../Gibbet";
import { PlayersCounter } from "../PlayersCounter";
import { WinsModal } from "../WinsModal";

export function Game() {
  const { game, isGameRunning, whoWon } = useContext(GameContext)


  if(whoWon){
    return (
      <WinsModal />
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