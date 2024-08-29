import "./App.css";
import { List } from "./Components/List";

function App() {
  return (
    <>
      <List items={[22, "sukmit", 56, { name: "ang" }, 6, 23]} />
    </>
  );
}

export default App;
