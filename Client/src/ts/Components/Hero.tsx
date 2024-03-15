import { VisualSeparator } from "./CommonElements";
import Navbar from "./Navbar";

export default function Hero()
{
    return (
        <>
            
            <div class=" mx-auto my-[10%] w-fit flex-col items-center justify-center select-none">
                <h1 class="text-white font-[Jaldi] font-bold text-[4rem]">
                    Welcome to my server
                </h1>
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