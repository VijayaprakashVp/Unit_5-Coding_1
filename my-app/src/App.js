// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Items } from "./components/Items";

function App() {
  const item = [
    { name: "Books", count: 1 },
    { name: "Pens", count: 1 },
    { name: "Notebooks", count: 1 },
    { name: "InkPens", count: 1 },
  ];
  const [arr, setArr] = useState(item);

  const handleChange = (value) => {
    setArr = e.count + value;
  };

  return (
    <div>
      <div className="App">
        {/* Hello 123456 */}
        {arr.map((e) => (
          <Items name={e.name} count={e.count} function={handleChange} />
        ))}
      </div>
    </div>
  );
}

export default App;
