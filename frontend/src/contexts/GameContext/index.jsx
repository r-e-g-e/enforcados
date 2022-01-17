import React, { createContext, useEffect, useState } from "react";
import io from 'socket.io-client'

const GameContext = createContext()

function GameProvider(props) {
  const [socket, setSocket] = useState()
  const [host, setHost] = useState()
  const [isHost, setIsHost] = useState(false)
  const [isMyTurn, setIsMyTurn] = useState()
  const [game, setGame] = useState()
  const [isGameRunning, setIsGameRunning] = useState(false)
  const [whoWon, setWhoWon] = useState()

  useEffect(() => {
    if (!socket) {
      const socket = io('http://localhost:3000')
      setSocket(socket)
    }
  }, [socket])

  useEffect(() => {
    if (socket) {
      socket.on('connect', () => {

        socket.on('newhost', (playerId) => {
          setHost(playerId)
          setIsHost(playerId === socket.id ? true : false)
        })

        socket.on('matchdata', (game) => {
          setGame(game)
          setIsGameRunning(game.isGameRunning)
          setIsMyTurn(game.currentPlayer === socket.id ? true : false)
        })

        socket.on('whowon', (whoWon) => {
          setWhoWon(whoWon)
        })
      })
    }
  }, [socket])


  const values = {
    socket,
    host,
    isHost,
    isMyTurn,
    game,
    isGameRunning,
    whoWon,
    setWhoWon
  }

  return (
    <GameContext.Provider value={values}>
      {props.children}
    </GameContext.Provider >
  )
}

export { GameContext, GameProvider }