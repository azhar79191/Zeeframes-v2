// import { Routes, Route, BrowserRouter } from "react-router-dom";
// import MainLayout from "@/components/layout/MainLayout";
// import HomeView from "../pages/home";
// import About from "@/pages/about";

// export default function CustomRoutes() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<MainLayout />}>
//                 <Route path="/" element={<HomeView/>}/>
//                     <Route path="/about" element={<About/>} />
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     );
// }

import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import HomeView from "../pages/Home";
import About from "../pages/about";

export default function CustomRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomeView />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
