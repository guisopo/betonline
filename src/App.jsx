import { Header } from './Components/Header';
import { GameList } from './Components/GameList';
import { Footer } from './Components/Footer';
import './styles/main.scss'

function App() {
  return (
    <div className="app">
      <Header/>
      <GameList/>
      <Footer/>
    </div>
  );
}

export default App;
