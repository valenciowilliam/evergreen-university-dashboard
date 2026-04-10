import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Header";
import Footer from "./Footer"; // Import the new Footer
import LoginPanel from "./LoginPanel";
import RegistrationForm from "./RegistrationForm";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FetchData from "./pages/FetchData";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="app-root">
      <Header />

      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPanel />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fetch" element={<FetchData />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>

      <Footer /> {/* Footer is now common to all pages */}
    </div>
  );
}

export default App;