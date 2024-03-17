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