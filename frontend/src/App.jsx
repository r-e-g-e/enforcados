import { GlobalStyle } from './globalStyles'
import { GameProvider } from './contexts/GameContext'
import { Game } from './components/Game'
import { SecretWord } from './components/SecretWord';
import { Gibbet } from './components/Gibbet';

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
