import { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import NewsBoard from "./components/NewsBoard";

function App() {
  const [category, setCategory] = useState("general");

  return (
    <>
      <AppHeader setCategory={setCategory} />
      <NewsBoard category={category} />
    </>
  );
}

export default App;
