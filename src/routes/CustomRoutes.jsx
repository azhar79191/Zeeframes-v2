import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import HomeView from "../pages/Home";
import About from "../pages/about";
import Workpage from "@/pages/work";
import InsightsPage from "@/pages/insights";
import ServicePage from "@/pages/services";

import ServicesPage from "../pages/ServicesPage";
import ScrollToTop from "@/components/ScrollToTop";

export default function CustomRoutes() {
    return (
        <BrowserRouter>
        <ScrollToTop/>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomeView />} />
                    <Route path="about" element={<About />} />
                    <Route path="/work" element={<Workpage />} />
                    <Route path="/insights" element={<InsightsPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/services/:slug" element={<ServicePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
