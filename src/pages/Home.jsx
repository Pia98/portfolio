import Opening from '../sections/Opening';
import Showcase from '../sections/Showcase';
import EducationCards from '../sections/EducationCards';
import Timeline from '../sections/Timeline';
import TechStack from '../sections/TechStack';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

const Home = () => {
    return (
        <>
            <Opening />
            <EducationCards/>
            <Showcase />
            <Timeline/>
            <TechStack/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default Home;