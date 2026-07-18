import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Growth from "./pages/Growth";
import SystemDetail from "./pages/SystemDetail";
import Capital from "./pages/Capital";
import Leadership from "./pages/Leadership";
import Institute from "./pages/Institute";
import Collective from "./pages/Collective";
import Partnerships from "./pages/Partnerships";
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
            <Route path="/growth" element={<Growth />} />
            <Route path="/growth/systems/:slug" element={<SystemDetail />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/capital" element={<Capital />} />
            <Route path="/institute" element={<Institute />} />
            <Route path="/collective" element={<Collective />} />
            <Route path="/partnerships" element={<Partnerships />} />

            {/* Legacy route redirects — Malachi renamed pages 2026-07-17. */}
            <Route path="/marketing" element={<Navigate to="/growth" replace />} />
            <Route path="/coaching" element={<Navigate to="/leadership" replace />} />
            <Route path="/academy" element={<Navigate to="/institute" replace />} />
            <Route path="/partners" element={<Navigate to="/collective" replace />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
