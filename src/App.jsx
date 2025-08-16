// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Home } from "@/routes/Home";
import { Toaster } from "@/components/ui/toaster"; // 1. Importe o Toaster

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <Toaster /> {/* 2. Adicione o Toaster aqui */}
      </div>
    </Router>
  );
}

export default App;