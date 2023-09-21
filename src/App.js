import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";

function App() {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
