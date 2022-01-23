// Apos ter ganjo o primeiro jgoo, quando o player envia uma letra  o #currentPlayer no sendGameData esta undefined

class IoEvents {
  #io
  #lifes
  #hostId
  #players
  #wordStatus
  #secretWord
  #isGameRunning
  #currentPlayerId
  #isWordCompleted
  #usedLetters
  #connectedSockets

  constructor(io) {
    this.#io = io
    this.#players = new Array()
    this.#usedLetters = new Array()
    this.#connectedSockets = new Array()
    this.#lifes = 6

    this.#hostId
    this.#secretWord
    this.#wordStatus

    this.#isWordCompleted = false
    this.#isGameRunning = false
  }

  defineHost(playerId) {
    const hostIdOnConnected = this.#connectedSockets.indexOf(this.#hostId)

    if (hostIdOnConnected != -1) {
      this.#players.push(this.#hostId)
    }

    this.#hostId = playerId

    const indexPlayersArr = this.#players.indexOf(playerId)
    if (indexPlayersArr != -1) this.#players.splice(indexPlayersArr, 1)

    this.#io.emit("newhost", playerId)
  }

  resetGame() {
    this.#currentPlayerId = undefined
    this.#isWordCompleted = false
    this.#isGameRunning = false
    this.#secretWord = undefined
    this.#wordStatus = undefined
    this.#usedLetters = new Array()
    this.#lifes = 6

    console.log("RESETOU")
  }

  setNextCurrentPlayer() {
    const indexOfLastPlayer = this.#players.indexOf(this.#currentPlayerId)

    let nextPlayerIndex = indexOfLastPlayer + 1

    if (this.#players[nextPlayerIndex] === this.#hostId) nextPlayerIndex++

    if (indexOfLastPlayer + 1 >= this.#players.length) {
      nextPlayerIndex = 0
    }

    this.#currentPlayerId = this.#players[nextPlayerIndex]
  }

  sendMatchData() {
    const matchData = {
      lifes: this.#lifes,
      hostId: this.#hostId,
      players: this.#players,
      wordStatus: this.#wordStatus,
      isGameRunning: this.#isGameRunning,
      currentPlayer: this.#currentPlayerId,
      isWordCompleted: this.#isWordCompleted,
      usedLetters: this.#usedLetters
    }

    console.log(this.#currentPlayerId)

    this.#io.emit("matchdata", matchData)
  }

  randomizeHost() {
    let randomIndex = Math.trunc(Math.random()) * this.#players.length

    if (randomIndex === this.#players.indexOf(this.#hostId)) {
      randomIndex++
    }

    console.log({ randomIndex })

    this.defineHost(this.#players[randomIndex])
  }

  connection() {
    this.#io.on("connection", socket => {
      const clientId = socket.id

      if (this.#connectedSockets.length > 5) {
        socket.disconnect()
        console.log("Fucker disconnected!")
        return;
      }

      this.#connectedSockets.push(clientId)

      if (!this.#hostId) {
        this.defineHost(clientId)
      }
      else {
        this.#players.push(clientId)
      }

      this.sendMatchData()

      for (const [key, value] of Object.entries(this)) {
        if (!!key.match(/socket/ig)) value(socket)
      }
    })
  }

  socketDisconnecting = (socket) => {
    socket.on("disconnecting", () => {
      const clientId = socket.id
      const indexPlayersArr = this.#players.indexOf(clientId)
      const indexConnectedArr = this.#connectedSockets.indexOf(clientId)

      if (indexPlayersArr != -1) this.#players.splice(indexPlayersArr, 1)
      this.#connectedSockets.splice(indexConnectedArr, 1)

      if (clientId === this.#hostId) this.defineHost(this.#players[0])

      if (this.#players.length <= 1) {
        this.resetGame()
      }

      socket.removeAllListeners()
    })
  }

  socketSetSecretWord = (socket) => {
    socket.on("secretword", word => {
      const clientId = socket.id

      if (!word || word.length <= 2) return;
      if (clientId !== this.#hostId) return;
      if (this.#secretWord || this.#isGameRunning) return;

      word = word.toLowerCase()

      this.#lifes = 6
      this.#isGameRunning = true

      const wordArray = word.split("")

      for (let word of wordArray) {
        word = Number(word)
        if (word != " " && typeof word === "number" && !isNaN(word)) return;
      }

      this.#secretWord = word
      this.#wordStatus = wordArray.map(letter => {
        if (letter === " ") return " "
        return false
      })

      this.setNextCurrentPlayer()

      this.sendMatchData()
      console.log("COMECOU")
    })
  }

  socketAttemptLetter = (socket) => {
    function playerWon(player = true) {
      this.#io.emit("whowon", player ? "player" : "host")

      console.log(player ? "player" : "host", " ganhou!")
    }

    socket.on("attemptletter", word => {
      if (!word || word.length > 1) return;
      if (!this.#secretWord) return;
      if (socket.id != this.#currentPlayerId) return;

      word = word.toLowerCase()

      if (this.#usedLetters.includes(word)) {
        this.#lifes--
        this.setNextCurrentPlayer()
        this.sendMatchData()

        return;
      }

      let wordNotFound = true

      for (let i = 0; i < this.#secretWord.length; i++) {
        if (word === this.#secretWord[i]) {
          this.#wordStatus[i] = word
          wordNotFound = false
        }
      }

      if (wordNotFound) this.#lifes--


      this.#usedLetters.push(word)

      this.setNextCurrentPlayer()

      if (this.#wordStatus.every(word => !!word)) {
        this.resetGame()
        playerWon.bind(this)(true)
        this.randomizeHost()
      }
      if (this.#lifes <= 0) {
        this.resetGame()
        playerWon.bind(this)(false)
        this.randomizeHost()
      }

      this.sendMatchData()
    })
  }

}


export function initEvents(io) {
  const events = new IoEvents(io)

  events.connection()

  return events
}
