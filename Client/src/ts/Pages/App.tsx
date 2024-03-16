import { SideTextDeco } from "../Components/CommonElements";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Waves from "../Components/Waves";
import AboutSection from "../Components/AboutSection";
import ContentSection from "../Components/ContentSection";

export default function App()
{
    

    return (
        <>
            <div class="bg" />

            
            <section id="heroSection" class="min-h-full h-fit w-full align-top flex flex-col">
                <Navbar />
                <Hero />
            </section>

            <Waves />

            <section id="contentSection" class="  bg-white h-fit w-full px-56 py-20 content-section">
                <AboutSection />
                <ContentSection />
            </section>

            <Waves isUpsideDown = {true} />

           
            <section id="footerSection" class = "h-full">
                
            </section>
            
            
        </>
    )
}