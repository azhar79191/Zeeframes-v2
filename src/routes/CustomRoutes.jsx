import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import HomeView from "../pages/Home";
import About from "../pages/about";
import Workpage from "@/pages/work";
import InsightsPage from "@/pages/insights";

export default function CustomRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomeView />} />
                    <Route path="about" element={<About />} />
                    <Route path="/work" element={<Workpage/>}/>
                    <Route path="/insights" element={<InsightsPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
