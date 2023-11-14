import {BrowserRouter, Route, Routes} from "react-router-dom"

import Celebrity from "./pages/Celebrity";
import Header from "./components/Header";
import Home from "./pages/Home";
import LoginControl from "./pages/LoginControl";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import Tv from './pages/Tv'

function App() {
  return (
  <div className = "root-wrap">
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/person" element={<Celebrity />} />
        <Route path="/login" element={<LoginControl />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;