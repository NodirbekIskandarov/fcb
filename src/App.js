import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from './layout'
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Index/>}>
            <Route path="/" element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
