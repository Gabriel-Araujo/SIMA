import { useState } from "react";
import "./App.css";
import { Cards } from "./components";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header border-b"></div>
      <main className="main">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Dashboard
        </h1>

        <Cards />
      </main>
    </>
  );
}

export default App;
