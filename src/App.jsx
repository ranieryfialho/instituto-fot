// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Home } from "@/routes/Home"; // Vamos criar este arquivo em breve

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* No futuro, outras páginas como /sobre e /contato serão adicionadas aqui */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;