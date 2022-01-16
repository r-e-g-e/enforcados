import React, { useContext, useState } from "react";
import { GameContext } from "../../contexts/GameContext";
import { Container } from "./styles"

export function HostModal() {
  const { socket, game } = useContext(GameContext)
  const [input, setInput] = useState('')

  function handleChange(event) {
    const input = event.target.value
    setInput(input)
  }

  function handleClick() {
    if (socket && input) {
      socket.emit('secretword', (input))
    }
  }

  return (
    <Container>
      <h2>Escolha a palavra secreta</h2>
      <input type="text" onChange={handleChange} value={input} placeholder="digite aqui..." maxLength={15}/>
      <button onClick={handleClick} disabled={!game || game.players.length < 1}>Enviar</button>
    </Container>
  )
}