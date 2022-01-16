import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "../../contexts/GameContext";
import { Container } from "./styles"

export function SecretWord() {
  const { game } = useContext(GameContext)
  const [word, setWord] = useState([])

  useEffect(() => {
    if (game.wordStatus) {
      setWord(game.wordStatus)
    }
  }, [game])

  const letters = game && word.map((letter, i) => {

    if (letter) {
      letter = letter === ' ' ? '-' : letter
    } else {
      letter = ' '
    }

    return (
      <span className="word__letter" key={i}>{letter}</span>
    )
  })

  return (
    <Container>
      {letters}
    </Container>
  )
}