import Body from "./Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import CreateHall from "./CreateHall";
import { Provider } from "react-redux";
import store from "./store/store";
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createhall" element={<CreateHall />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
