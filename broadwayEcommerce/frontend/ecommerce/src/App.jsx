import "./App.css";
import About from "./pages/about";
import Home from "./pages/home";
import Service from "./pages/service";
import { BrowserRouter, Routes , Route ,Link} from "react-router";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Link to={'/'}>Home</Link>
          <Link to={'/about-us'}>About Us</Link>
          <Link to={'/service'}>Our Services</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/products/:id" element={<div>Product detil page</div>} />
          <Route path="*" element={ <h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;