export function VisualSeparator()
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

export function SideTextDeco()
{
    const width = "3px"

    return (
        <>
            <div  />
        </>
    )
}