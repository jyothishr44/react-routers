import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import Nav from "./pages/Nav";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
