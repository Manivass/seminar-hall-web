import Body from "./Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import CreateHall from "./CreateHall";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createhall" element={<CreateHall />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
