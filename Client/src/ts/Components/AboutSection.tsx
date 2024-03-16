import { SideTextDeco } from "./CommonElements";

export default function()
{
    return (
        <>
            <h1 class=" text-4xl w-full text-center mb-16">About me</h1>
            <div class = "flex flex-row h-fit text-xl">
                <SideTextDeco />
                <div>
                    <h2>Who am I?</h2>
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