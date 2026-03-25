import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Websites from "./pages/Websites.tsx";
import Services from "./pages/Services.tsx";
import EcommerceService from "./pages/services/EcommerceService.tsx";
import GraphicsService from "./pages/services/GraphicsService.tsx";
import ThreeDService from "./pages/services/ThreeDService.tsx";
import SocialMediaService from "./pages/services/SocialMediaService.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/ecommerce" element={<EcommerceService />} />
          <Route path="/services/graphics" element={<GraphicsService />} />
          <Route path="/services/3d" element={<ThreeDService />} />
          <Route path="/services/social-media" element={<SocialMediaService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
