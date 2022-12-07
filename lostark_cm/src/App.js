import { Routes, Route } from "react-router-dom";
import Detail from "./page/detail";
import Main from "./page/main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/character:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
