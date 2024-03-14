import { VisualSeparator } from "./CommonElements";
import Navbar from "./Navbar";

export default function()
{
    return (
        <>
            <Navbar />
            <Hero />
        </>
    )
}

function Hero()
{
    return (
        <>
            <div class=" absolute m-auto mt-[250px] w-fit inset-0 flex-col items-center justify-center">
                <div class="text-white font-[Jaldi] font-bold text-[4rem]">
                    Welcome to my server
                </div>
                <VisualSeparator vertical={false} />

                <div class = "flex mt-32 items-center px-14 justify-around gap-10">
                    <ServicesButton />
                    <AboutButton />
                </div>
                
                

            </div>
        </>
    )
}

function ServicesButton()
{
    return (
        <>
            <div class="CTA-button services-button">
                <a class=" w-full text-center" href = ".">Services</a>
            </div>
        </>
    )
}

function AboutButton()
{
    return (
        <>
            <div class="CTA-button about-button">
                <a class=" w-full text-center" href = ".">About</a>
            </div>
        </>
    )
}