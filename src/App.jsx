// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollIndicator } from "@/components/common/ScrollIndicator";
import { Home } from "@/routes/Home";
import { Toaster } from "@/components/ui/toaster";
import { useScrollToSection } from "@/hooks/useScrollToSection";

// Componente wrapper que inclui o hook de scroll
const AppContent = () => {
  useScrollToSection(); // Hook que gerencia o scroll automático

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans antialiased scroll-smooth">
      <Navbar />
      
      {/* Indicador de scroll (lado direito da tela) */}
      <ScrollIndicator />
      
      <main className="flex-grow">
        <Routes>
          {/* Todas as rotas renderizam a mesma página Home, 
              mas o hook useScrollToSection fará o scroll para a seção correta */}
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Home />} />
          <Route path="/acompanhamento" element={<Home />} />
          <Route path="/depoimentos" element={<Home />} />
          <Route path="/contato" element={<Home />} />
          
          {/* Rota catch-all - redireciona para home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;