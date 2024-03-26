import { Show } from "solid-js";
import { BlackVisualSeparator, ServiceButton, SideTextDeco, WhiteVisualSeparator } from "../../Components/CommonElements";


export default function ()
{
    return (
        <>
            <section id="contentSection" class="  bg-white h-fit w-full max-lg:px-10 lg:px-56 py-20 content-section">
                <AboutSection />
                <ContentSection />
            </section>
            
        </>
    )
}

function AboutSection()
{
    return (
        <>
            <h1 id = "About me" class=" text-4xl w-full text-center">About me</h1>
            <div class = "flex flex-row h-fit text-xl my-16">
                <SideTextDeco />
                <div class = "about-me">
                    <h2 style={"margin-top:0;"}>Who am I?</h2>
                    <p>
                        Hi! I’m Dr3EmUr, and I’m and aspiring full stack web developer from Italy.
                        I’m currently still a high school student but I hope I can get in the field soon enough.
                    </p>

                    <h2>What is this place?</h2>
                    <p>
                        This is the place where I’m going to host some of my side projects.
                        The whole reason behind this project is my desire to learn how to actually deploy and mantain a website,
                        and I wanted to make a not-entirely trivial project so it could entertain someone even if just for a few minutes.
                    </p>

                    <h2>Can I contact you?</h2>
                    <p>
                        Sure. My email is <br />
                        chiapperini.marco230@gmail.com
                    </p>
                </div>
            </div>
        </>
    )
}

function ContentSection()
{
    return (
        <>
            <div id = "Services" class="h-full bg-white flex flex-col justify-around">
                <h1 class=" text-4xl w-full text-center py-14">Services</h1>

                    <Service name="Pong"
                        desc = {"This is a really cool game I built in pure Javascript without the aid of any framework." +
                        "To move, Press W and S as player 1 or Up and Down as player 2. The one that scores the most points wins! (currently only works on PC)"}
                        link = "/pong"
                        imgName={"images/MidiSaver.png"}
                    />
                
                    <BlackVisualSeparator />
                
                    <Service name="Chat"
                        desc = {"This is going to be a chat where you all wil be able to talk to each other. Currently a work in progress!"}
                        
                    />
                
                <div class = "flex flex-row h-fit text-xl my-16"></div>
            </div>
        </>
    )
}

function Service(props: { name: string, desc: string, link?: string, imgName? : string})
{
    if (props.imgName == undefined)
    {
        props.imgName = "images/Default Image.jpg"
    }

    return (
        <>
            <div class="flex max-lg:flex-col justify-items-start justify-start lg:flex-row my-4">
                <img src={props.imgName} alt={props.name} class = " aspect-square max-lg:w-[200px] lg:w-[230px] m-auto"/>
                <div class="flex flex-col gap-3 w-full">
                    <h2 class = "text-center font-bold text-2xl">{props.name}</h2>

                    <div class="flex flex-row h-full font-light text-lg">
                        <SideTextDeco />
                        <p>
                            {props.desc}
                        </p>
                    </div>

                    <Show when={props.link != null}>
                        <div class = "flex flex-row max-lg:justify-center max-lg:mt-5 lg:justify-end">
                            <ServiceButton link={props.link} />
                        </div>
                    </Show>
                    
                    

                </div>
                
            </div>  
        </>
    )
}