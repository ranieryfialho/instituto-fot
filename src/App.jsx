import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollIndicator } from "@/components/common/ScrollIndicator";
import { Home } from "@/routes/Home";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans antialiased scroll-smooth">
      <Navbar />

      <ScrollIndicator />
      
      <main className="flex-grow">
        <Home />
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;