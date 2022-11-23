import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Button from "./components/Button";
import ShortUrlFront from "./pages/ShortUrlFront";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gen/:shortUrl" element={<ShortUrlFront />} exact />
      </Routes>
    </div>
  );
}

export default App;
