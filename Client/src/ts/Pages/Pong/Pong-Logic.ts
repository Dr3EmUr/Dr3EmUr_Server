export default function ()
{
    // cofing variables

    // update time is 1 second / whatever times a second I want the update loop to be
    const updateTime = 1000.0/120.0
    const distanceFromBorder = 150;

    const playerHeight = 150;
    const playerWidth = 15;
    const ballSize = 20;

    const playerSpeed = 3.5;
    const ballSpeed = 4;

    // I really should have made this object oriented and separated things in different files but who cares lol this is just a demo project
    //-----------------------------------------------------------------------------------------------------------------------------------------------

    // global variables

    const root = document.querySelector("main")
    const score = document.querySelector(".scoreContainer")

    // game objects
    let /** @type {HTMLDivElement?} */ p1; 
    let /** @type {HTMLDivElement?} */ p2;
    let /** @type {HTMLDivElement?} */ ball;

    // movement flags

    let isWPressed = false;
    let isSPressed = false;
    let isUpPressed = false;
    let isDownPressed = false;

    // ball movement related flags (initialized to right movement for gameplay purposes)
    // their values can be -1,0 or 1

    let ballHorizontalVelocity = 1;
    let ballVerticalVelocity = 0;



    /**executed `1 / updateTime` times per second */ 
    function update()
    {
        handlePlayerMovement();
        handleBallMovement();
        checkCollisions();
    }

    /** checks for ball collisions and reacts accordingly */

    function checkCollisions()
    {
        const p1RightBounds = parseInt(p1.style.left) + playerWidth
        const p2RightBounds = parseInt(p2.style.left) + playerWidth
        
        const p1LeftBounds = parseInt(p1.style.left)
        const p2LeftBounds = parseInt(p2.style.left)

        const p1TopBounds = parseInt(p1.style.top)
        const p2TopBounds = parseInt(p2.style.top)

        const p1BottomBounds = p1TopBounds + playerHeight
        const p2BottomBounds = p2TopBounds + playerHeight

        const ballLeftPosition = parseInt(ball.style.left.replace("px",""))
        const ballTopPosition = parseInt(ball.style.top.replace("px",""))

        const nextBallLeft = ballLeftPosition + ballHorizontalVelocity * ballSpeed
        const nextBallTop = ballTopPosition + ballVerticalVelocity * ballSpeed

        // check p1 collision
        if (nextBallLeft < p1RightBounds && 
            nextBallTop + ballSize > p1TopBounds && 
            nextBallTop < p1BottomBounds && 
            nextBallLeft + ballSize > p1LeftBounds)
        {
            ballHorizontalVelocity = 1

            if (isWPressed && ballVerticalVelocity != -1)
            {
                ballVerticalVelocity += -0.5
            }

            if (isSPressed && ballVerticalVelocity != 1)
            {
                ballVerticalVelocity += 0.5
            }
        }

        // check p2 collision
        if (nextBallLeft + ballSize > p2LeftBounds && 
            nextBallTop + ballSize > p2TopBounds && 
            nextBallTop < p2BottomBounds && 
            nextBallLeft < p2RightBounds)
        {
            ballHorizontalVelocity = -1

            if (isUpPressed && ballVerticalVelocity != -1)
            {
                ballVerticalVelocity += -0.5
            }

            if (isDownPressed && ballVerticalVelocity != 1)
            {
                ballVerticalVelocity += 0.5
            }
        }

        // check collision with borders

        if (nextBallTop < 0)
        {
            ballVerticalVelocity = -ballVerticalVelocity;
        }

        if (nextBallTop + ballSize > window.innerHeight)
        {
            ballVerticalVelocity = -ballVerticalVelocity
        }

        // score for p2!
        if (nextBallLeft < 0)
        {
            console.log("score!")

            const elem = score.children[2]
            let s = parseInt(elem.innerHTML)
            s++;
            elem.innerHTML = s.toString()

            resetGame()
            
        }

        // score for p1!
        if (nextBallLeft + ballSize > window.innerWidth)
        {
            console.log("score!")

            ballHorizontalVelocity = -ballHorizontalVelocity

            const elem = score.children[0]
            let s = parseInt(elem.innerHTML)
            s++;
            elem.innerHTML = s.toString()

            resetGame()

        }
    }

    /** initializes the game */
    function startup()
    {
        generateElements();
        setupUserInput();
    }

    /** checks for ball velocity and moves the ball accordingly */
    function handleBallMovement()
    {
        let topString = ball.style.top;
        let topProcessedString = topString.replace("px","");
        let topValue = parseInt(topProcessedString);

        let leftString = ball.style.left;
        let leftProcessedString = leftString.replace("px","");
        let leftValue = parseInt(leftProcessedString);

        let topMovement = ballVerticalVelocity * ballSpeed;
        let leftMovement = ballHorizontalVelocity * ballSpeed;

        topValue += topMovement;
        leftValue += leftMovement;

        ball.style.top = topValue + "px"
        ball.style.left = leftValue + "px"

        
    }

    /** checks for user input and moves the player accordingly */
    function handlePlayerMovement()
    {
        if (isWPressed)
            movePlayer(p1,false)

        if (isSPressed)
            movePlayer(p1,true)

        if (isUpPressed)
            movePlayer(p2,false)

        if (isDownPressed)
            movePlayer(p2,true)
    }

    /**
     * moves the given player to the given direction
     * 
     * @param {HTMLDivElement} player 
     * @param {boolean} moveDownwards
     */
    function movePlayer(player,moveDownwards)
    {
        const playerMovement = moveDownwards? playerSpeed : -playerSpeed;
        let topString = player.style.top;
        let topProcessedString = topString.replace("px","");
        let topValue = parseInt(topProcessedString);

        // checks if the movement would take the player out of bounds
        if (topValue - playerSpeed < 0 && playerMovement < 0 || 
            topValue + playerHeight + playerSpeed > window.innerHeight && playerMovement > 0)
                return;


        topValue += playerMovement;

        player.style.top = topValue + "px"
    }

    /** starts listening for user input */
    function setupUserInput()
    {
        document.addEventListener("keydown",(e) => {

            switch(e.key)
            {
                case "w":
                    isWPressed = true;
                    break;
                case "s":
                    isSPressed = true;
                    break;
                case "ArrowUp":
                    isUpPressed = true;
                    break;
                case "ArrowDown":
                    isDownPressed = true;
                    break;
            }
            
        })

        document.addEventListener("keyup",(e) => {

            switch(e.key)
            {
                case "w":
                    isWPressed = false;
                    break;
                case "s":
                    isSPressed = false;
                    break;
                case "ArrowUp":
                    isUpPressed = false;
                    break;
                case "ArrowDown":
                    isDownPressed = false;
                    break;
            }
            
        })
    }

    /** generates the graphic elements of the game */
    function generateElements()
    {
        
        p1 = createPlayer(true)
        p2 = createPlayer(false)
        ball = createBall();

        root.appendChild(p1)
        root.appendChild(p2)
        root.appendChild(ball)
    }

    function resetGame()
    {
        ballVerticalVelocity = 0;

        const newVelocitySelector = Math.random() * 10

        if (newVelocitySelector <= 5)
            ballHorizontalVelocity = -ballHorizontalVelocity

        

        root.removeChild(p1)
        root.removeChild(p2)
        root.removeChild(ball)

        generateElements()
    }

    /**
     * generates an HTMLDivElement that represents the player
     * 
     * @param {boolean} isLeft whether or not the player will be generated on the left side of the screen
     * @returns {HTMLDivElement}
    */
    function createPlayer(isLeft)
    {
        const middleY = window.innerHeight / 2
        console.log(middleY)
        const p = document.createElement("div");
        p.className = "player"

        p.style.width = playerWidth + "px"
        p.style.height = playerHeight + "px"

        p.style.top = middleY - playerHeight / 2 + "px"

        if (isLeft)
            p.style.left = distanceFromBorder + "px"
        else
            p.style.left = (window.innerWidth - distanceFromBorder - playerWidth) + "px"

        return p
    }

    /**
     * generates an HTMLDivElement that represents the player
     * 
     * @returns {HTMLDivElement}
     */
    function createBall()
    {
        
        const ball = document.createElement("div");
        ball.className = "ball"

        ball.style.width = ballSize + "px"
        ball.style.height = ballSize + "px"

        const middleY = window.innerHeight / 2
        const middleX = window.innerWidth / 2

        const leftDistance = middleX - ballSize / 2
        const topDistance = middleY - ballSize / 2
        console.log(topDistance + "; " + middleY)

        ball.style.left = leftDistance + "px"
        ball.style.top = topDistance + "px"

        return ball
    }

    //----------------------------------------------------------------------------------------------------------------------------------------------------

    startup()
    setInterval(update,updateTime)
}

