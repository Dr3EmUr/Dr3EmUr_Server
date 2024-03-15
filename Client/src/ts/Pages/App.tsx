import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";

export default function App()
{
    const grayColor = "rgb(217,217,217)"

    return (
        <>
            <div class="bg" />

            
            <section id="heroSection" class="min-h-full h-fit w-full align-top float-start flex flex-col">
                <Navbar />
                <Hero />
            </section>
            
            <svg width="100%" height="175">

                <rect
                    y = "150px"
                    width={"100%"}
                    height={"25px"}
                    fill={grayColor}
                />

                <path
                    d="
                        M0 150 
                        L 250 0 L 250 150 
                        L 500 0 L 500 150
                        L 750 0 L 750 150 
                        L 1000 0 L 1000 150
                        L 1250 0 L 1250 150 
                        L 1500 0 L 1500 150
                        L 1750 0 L 1750 150 
                        L 2000 0 L 2000 150 
                    
                        "
                    fill={grayColor}
                />

                <path
                    d="
                        M0 150 
                        L 250 0 L 250 150 
                        L 500 0 L 500 150
                        L 750 0 L 750 150 
                        L 1000 0 L 1000 150
                        L 1250 0 L 1250 150 
                        L 1500 0 L 1500 150
                        L 1750 0 L 1750 150 
                        L 2000 0 L 2000 150 
                    
                        "
                    fill="white"
                    style={"transform:translate(-27px,25px)"}
                />   
            </svg>

                

                

            <section id = "contentSection" class=" text-white bg-white h-96">
                
            </section>

           
            
            
            
        </>
    )
}