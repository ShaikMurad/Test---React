import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Msg name="Jaayu" />
      <Msg name="Dahil" />
      <Msg name="Pahil" />
    </div>
  );
}
function Msg(props) {
  const name = props.name;
  return (
    <div>
      <h1>
        Hello, <span className="userColorchange">{name}</span>🤩😎💐
      </h1>
      <p>this is super Cool</p>
    </div>
  );
}

export default App;
