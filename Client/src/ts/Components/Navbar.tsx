export default function Navbar()
{
    return (
        <>
            <div class = "flex flex-col md:sticky top-0 bg-black z-10">
                <nav class="px-7 py-4 flex flex-col md:flex-row gap-3 items-center text-white select-none">
                    <a href = "" class=" font-[Inika] font-bold text-2xl">Dr3EmUr's Server</a>
                    <NavbarElement text="Services" link="#Services" />
                    <NavbarElement text="About me" link="#AboutMe" />
                    <NavbarElement text="Contact me" link="#AboutMe" />
                    {/*<NavbarElement text="About this project" link = "" />*/} {/*This was commented out because this is not coming in first deploy*/}
                </nav>

                <div class = " max-md:small-navbar-decorator md:navbar-decorator"></div>
            </div>  
            
            
        </>
    )
}
function NavbarElement(props: { text: string, link : string })
{
    return (
        <>
            <a
                class=" font-[Inter] text-l"
                href={props.link}>
                
                {props.text}
            </a>
        </>
    )
}