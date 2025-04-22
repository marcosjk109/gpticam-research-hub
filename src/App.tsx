import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Researchers from "./pages/Researchers";
import Scholars from "./pages/Scholars";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import ResearcherProfile from "./pages/ResearcherProfile";
import ScholarProfile from "./pages/ScholarProfile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pesquisadores" element={<Researchers />} />
          <Route path="/pesquisadores/:id" element={<ResearcherProfile />} />
          <Route path="/bolsistas" element={<Scholars />} />
          <Route path="/bolsistas/:id" element={<ScholarProfile />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
