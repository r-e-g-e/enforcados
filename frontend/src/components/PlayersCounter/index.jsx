import React, { useContext } from "react"
import { GameContext } from "../../contexts/GameContext"
import { Container } from "./styles"

import usersIcon from "../../assets/icons/users.svg"

export function PlayersCounter() {
  const { game } = useContext(GameContext)

  return (
    <Container>
      <img src={usersIcon} alt="players" />
      <span>Players: {game.players.length + 1}/5</span>
    </Container>
  )
}