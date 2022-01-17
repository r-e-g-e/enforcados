import React, { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import { HostModal } from "../HostModal";
import { Container } from "./styles"

export function WaitStartGame() {
  const {isHost} = useContext(GameContext)

  return (
    <Container>
      {isHost ?
        <HostModal /> :
        <section className="playerModal">
          <h2>Aguardando a palavra secreta</h2>
          <div className="playerModal__waitIcon"></div>
        </section>
      }
    </Container>
  )
}