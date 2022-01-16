import { GlobalStyle } from './globalStyles'
import { GameProvider } from './contexts/GameContext'

function App() {
  return (
    <>
      <GlobalStyle />
      <GameProvider>

      </GameProvider>
    </>
  );
}

export default App;
