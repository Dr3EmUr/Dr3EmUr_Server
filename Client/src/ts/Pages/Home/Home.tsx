import { SideTextDeco } from "../../Components/CommonElements";
import HeroSection from "../Home/HeroSection";
import Navbar from "../../Components/Navbar";
import Waves from "../../Components/Waves";
import ContentSection from "../../Pages/Home/ContentSection";

export default function Home()
{
    return (
        <>
            <div style={"background-image: url('images/Night Sky.jpg');"} class="bg" />

            
            <HeroSection />
            <Waves />
            <ContentSection />
            <Waves isUpsideDown = {true} />
           
            <section id="footerSection" class = "h-[30vh] max-md:hidden">
                
            </section>
            
            
        </>
    )
}