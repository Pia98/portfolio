import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import HeroNet from "./pages/projects/HeroNet";
import Rarity from "./pages/projects/Rarity";
import VirtualArtGallery from "./pages/projects/VirtualArtGallery";
import ArtificialBees from "./pages/projects/ArtificialBees";
import DistancesInCVR from "./pages/projects/DistancesInCVR";
import EatWhatYouCatch from "./pages/projects/EatWhatYouCatch";
import Lilo from "./pages/projects/Lilo";
import RatsVsScience from "./pages/projects/RatsVsScience";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="projects" element={<Projects/>}/>
                    <Route path="projects/hero-net" element={<HeroNet/>}/>
                    <Route path="projects/rarity" element={<Rarity/>}/>
                    <Route path="projects/virtual-art-gallery" element={<VirtualArtGallery/>}/>
                    <Route path="projects/artificial-bees" element={<ArtificialBees/>}/>
                    <Route path="projects/distances-in-cvr" element={<DistancesInCVR/>}/>
                    <Route path="projects/eat-what-you-catch" element={<EatWhatYouCatch/>}/>
                    <Route path="projects/lilo" element={<Lilo/>}/>
                    <Route path="projects/rats-vs-science" element={<RatsVsScience/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;