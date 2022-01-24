import React, { useContext, useEffect, useState, useLayoutEffect } from "react";
import { GameContext } from "../../contexts/GameContext";
import { Container } from "./styles"

import { PlayersCounter } from "../PlayersCounter";
import Conffeti from 'react-confetti'

function useWindowWidth(){
  const [windowSize, setWindowSize] = useState()
  useLayoutEffect(() => {
    function updateSize() {
      setWindowSize(document.body.clientWidth);
    }

    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, [])
  return windowSize
}

export function WinsModal() {
  const { setWhoWon, whoWon } = useContext(GameContext)
  const windowWidth = useWindowWidth()

  function handleReset() {
    setWhoWon(null)
  }

  return (
    <Container>
      <Conffeti width={windowWidth} />
      <PlayersCounter />
      <h1>{whoWon} ganhou!!!</h1>
      <button onClick={handleReset}>reset</button>
    </Container>
  )
}