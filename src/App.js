import "./App.css";
import Logo from "./components/Logo/Logo";
import Name from "./components/Name/Name";
import Calc from "./components/Calc/Calc";

const App = () => {
  return (
    <body>
      <div className="center">
        <header className="main">
          <Logo></Logo>
          <Name></Name>
        </header>
        <Calc></Calc>
      </div>
    </body>
  );
};

export default App;
