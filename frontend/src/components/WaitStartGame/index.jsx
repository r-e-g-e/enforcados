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
        <div>Aguardando o arrombado do host dar play</div>
      }
    </Container>
  )
}