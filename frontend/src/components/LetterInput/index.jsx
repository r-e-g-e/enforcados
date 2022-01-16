import React, { useState, useContext, useEffect } from "react";
import { GameContext } from "../../contexts/GameContext";
import { Container } from "./styles"

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

export function LetterInput() {
  const { socket, isMyTurn, game } = useContext(GameContext)

  function handleClick(event) {
    const button = event.target

    if (button.classList.contains('used')) {
      return false
    }

    const letter = button.innerText
    socket.emit('attemptletter', letter)
  }

  const lettersButton = letters.map((letter) => (
    <button 
      key={letter} 
      onClick={handleClick} 
      disabled={!isMyTurn}
      className={game && game.usedLetters.includes(letter) ? 'used' :  null}
    >
      {letter}
    </button>
  ))

  return (
    <Container>
      {lettersButton}
    </Container>
  )
}