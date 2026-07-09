import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Marketing from "./pages/Marketing";
import Capital from "./pages/Capital";
import Coaching from "./pages/Coaching";
import Academy from "./pages/Academy";
import Partners from "./pages/Partners";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function App() {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col bg-ink text-cream">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/capital" element={<Capital />} />
            <Route path="/coaching" element={<Coaching />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
