import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by <a href="">Lila Oliver</a> and is outsourced
          on{" "}
          <a
            href="https://github.com/loliver42/weather-app-react/tree/master/src"
            target="blank"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
