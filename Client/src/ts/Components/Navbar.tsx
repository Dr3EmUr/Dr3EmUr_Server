export default function Navbar()
{
    return (
        <>
            <div class = "flex flex-col">
                <nav class="px-7 py-4 flex gap-3 items-center text-white">
                    <a href = "" class=" font-[Inika] font-bold text-2xl">Dr3EmUr's Server</a>
                    <NavbarElement text="Services" link="" />
                    <NavbarElement text="About me" link="" />
                    <NavbarElement text="Contact me" link="" />
                    <NavbarElement text="About this project" link = "" />
                </nav>

                <div class = "navbar-decorator"></div>
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