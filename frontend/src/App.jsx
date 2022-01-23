import { GlobalStyle } from './globalStyles'
import { GameProvider } from './contexts/GameContext'
import { Game } from './components/Game'

function App() {
  return (
    <>
      <GlobalStyle />
      <GameProvider>
        <Game />
      </GameProvider>
    </>
  );
}

export default App;
