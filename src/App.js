import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Details from "./components/Details";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route exact path="/loginPage" element={<ProtectedRoute />}>
        <Route exact path="/loginPage" element={<Home />} />
      </Route>
      <Route exact path="/loginPage/details" element={<ProtectedRoute />}>
        <Route exact path="/loginPage/details" element={<Details />} />
      </Route>
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
