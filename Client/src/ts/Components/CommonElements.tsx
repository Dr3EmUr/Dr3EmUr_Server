export function VisualSeparator(props: { vertical: boolean })
{
    const separatorSize = "4px"

    let separatorWidth : string;
    let separatorHeight : string;
    let fadeDirection : string;

    if (props.vertical == true)
    {
        separatorWidth = separatorSize;
        separatorHeight = "100%";
        fadeDirection = "bottom"
    }
    else
    {
        separatorWidth = "100%";
        separatorHeight = separatorSize;
        fadeDirection = "right"
    }

    return (
        <>
            <div style={
                `height:${separatorHeight};
                width:${separatorWidth};
                background-image: linear-gradient(
                    to ${fadeDirection}, 
                        rgb(0,0,0,0) 0%,
                        rgb(255,255,255,100%) 50%,
                        rgb(0,0,0,0) 100%);`} />
        </>
    )
}