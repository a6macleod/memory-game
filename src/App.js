import "./App.css";
import Header from "./components/Header";

function App() {
  const [score, setScore] = useState({
    currentScore: 0,
    bestScore: 0,
  });
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
