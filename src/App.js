import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from './layout'
import Home from "./pages/Home/Home";
import Statistika from "./pages/Statistika/Statistika";
import AllPlayers from "./pages/AllPlayers/AllPlayers";
import TestComponent from "./components/TestComponent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Index/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/statistics" element={<Statistika/>}/>
            <Route path="/all-players" element={<AllPlayers/>}/>
            <Route path="/test" element={<TestComponent/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
