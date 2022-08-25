import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Table from "./Components/Table";
import Subtext from "./Components/Subtext";
import "./Styles/App.css";

import GameProvider from "./Context/game.context";
import Replay from "./Components/Replay";

function App() {
  return (
    <GameProvider>
      <div className="App">
        <Header />
        <Subtext />
        <Table />
        <Replay />
        <Footer />
      </div>
    </GameProvider>
  );
}

export default App;
