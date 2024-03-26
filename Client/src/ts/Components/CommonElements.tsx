export function WhiteVisualSeparator()
{
    const separatorHeight = "4px"

    return (
        <>
            <div style={
                `height: ${separatorHeight};
                width: 100%;
                background-image: linear-gradient(
                    to right, 
                        rgb(0,0,0,0) 0%,
                        rgb(255,255,255,100%) 50%,
                        rgb(0,0,0,0) 100%);`} />
        </>
    )
}

export function BlackVisualSeparator()
{
    const separatorHeight = "2px"

    return (
        <>
            <div style={
                `height: ${separatorHeight};
                width: 100%;
                background-image: linear-gradient(
                    to right, 
                        rgb(255,255,255,0) 0%,
                        rgb(0,0,0,100%) 30%,
                        rgb(0,0,0,100%) 70%,
                        rgb(255,255,255,255) 100%);`} />
        </>
    )
}

export function SideTextDeco()
{
    const width = "3px"

    return (
        <>
            <div style={
                `margin-right: 15px;
                width: ${width};
                background-image: linear-gradient(
                    to bottom, 
                        rgba(0,0,0,100%) 0%,
                        rgba(0,0,0,100%) 50%,
                        rgba(0,0,0,0) 100%);`} />
        </>
    )
}

export function ServiceButton(props : {link : string})
{
    const buttonHeight = "40px"
    const buttonWidth = "160px"

    return (
        <>
            <div class = " h-fit w-fit flex flex-col">
                <button
                    style={`height: ${buttonHeight};
                            width:  ${buttonWidth};`}
                    class={ " bg-gradient-to-r from-[--azure] to-[--purple]" +
                            " rounded-[12px] text-border z-[2] " +
                            " text-white text-xl font-extrabold " + 
                            " hover:translate-x-[1px] hover:translate-y-[1px] transition duration-75" + 
                            " active:translate-x-[3.5px] active:translate-y-[2px]"}>
                    <a href = {props.link}> Use Service </a>
                </button>

                <div
                    style={`height: ${buttonHeight};
                            width:  ${buttonWidth};
                            transform: translate(3.5px,-37px);`}
                    class={" bg-gradient-to-r from-[--dark-azure] to-[--dark-purple]" +
                                " rounded-[12px] text-border " +
                                " text-white text-xl font-extrabold "}>
                </div>
            </div>
            
        </>
    )
}