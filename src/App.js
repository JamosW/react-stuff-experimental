import "./styles.css";
import Sect from "./Sect";
import Data from "./Data";
import Header from "./Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      {Data.map((item) => (
        <Sect {...item} />
      ))}
    </div>
  );
}
