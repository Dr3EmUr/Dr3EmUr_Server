import { WhiteVisualSeparator } from "../../Components/CommonElements";
import Navbar from "../../Components/Navbar";

export default function Hero()
{
    return (
        <>
            <Navbar />
            <section id="heroSection" class="min-h-[100vh] h-fit w-full align-top flex flex-col max-md:hidden">
                
                <div class=" mx-auto my-[10%] w-fit flex-col items-center justify-center select-none">
                    <h1 class="text-white font-[Jaldi] font-bold text-[4rem]">
                        Welcome to my server
                    </h1>
                    <WhiteVisualSeparator />

                    <div class = "flex mt-32 items-center px-14 justify-around gap-10">
                        <ServicesButton />
                        <AboutButton />
                    </div>
                    
                </div>
            </section>
        </>
    )
}

function ServicesButton()
{
    return (
        <>
            <div class="CTA-button services-button">
                <a class=" w-full text-center" href = "#Services">Services</a>
            </div>
        </>
    )
}

function AboutButton()
{
    return (
        <>
            <div class="CTA-button about-button">
                <a class=" w-full text-center" href = "#AboutMe">About</a>
            </div>
        </>
    )
}