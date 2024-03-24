export default function waves(props : {isUpsideDown? : boolean})
{
    props.isUpsideDown = props.isUpsideDown == undefined ? false : props.isUpsideDown;
    const grayColor = "rgb(217,217,217)"
    
    return <>
    <svg width="100%" height="175" style={props.isUpsideDown ? "transform : scaleY(-1) scaleX(-1);" : ""} class = "max-md:hidden">

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
    </>
}