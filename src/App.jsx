import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import HeroNet from "./pages/projects/HeroNet";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="projects" element={<Projects/>}/>
                    <Route path="projects/hero-net" element={<HeroNet/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;