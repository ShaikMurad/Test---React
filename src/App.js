import logo from "./logo.svg";
import "./App.css";

const names = ["Cherry", "Murad", "Muradcherry"];
function App() {
  return (
    <div className="App">
      <Msg name="Jaayu" />
      <Msg name="Dahil" />
      <Msg name="Pahil" />
    </div>
  );
}
function Counter() {
  //let like = 10;
  const [like, setLike] = useState(0);
  return (
    <div>
      <button onClick={() => setLike(like + 1)}>👍{like}</button>
    </div>
  );
}
// function Msg(props) {
//   const name = props.name;
//   return (
//     <div>
//       <h1>
//         Hello, <span className="userColorchange">{name}</span>🤩😎💐
//       </h1>
//       <p>this is super Cool</p>
//     </div>
//   );
// }

export default App;
