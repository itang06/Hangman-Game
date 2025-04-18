const HEAD = (
    <div>
    <div style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        right: "-30px",
        top: "50px"
    }}/>
    <div style={{
        width: "2px",
        height: "2px",
        backgroundColor: "black",
        borderRadius: "100%",
        border: "5px solid black",
        position: "absolute",
        right: "-15px",
        top: "75px"
    }}/>
    <div style={{
        width: "2px",
        height: "2px",
        backgroundColor: "black",
        borderRadius: "100%",
        border: "5px solid black",
        position: "absolute",
        right: "15px",
        top: "75px"
    }}/>
    </div>
)

const BODY = (
    <div style={{
        width: "10px",
        height: "110px",
        background: "black",
        position: "absolute",
        right: "0px",
        top: "110px"
    }}/>
)

const RIGHT_ARM = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        right: "-100px",
        top: "150px",
        rotate: "-30deg",
        transformOrigin: "left bottom"
    }}/>
)

const LEFT_ARM = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        right: "10px",
        top: "150px",
        rotate: "30deg",
        transformOrigin: "right bottom"
    }}/>
)

const RIGHT_LEG = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        right: "-90px",
        top: "210px",
        rotate: "60deg",
        transformOrigin: "left bottom"
    }}/>
)

const LEFT_LEG = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        right: "0px",
        top: "210px",
        rotate: "-60deg",
        transformOrigin: "right bottom"
    }}/>
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export function HangmanDrawing({numberOfGuesses}: HangmanDrawingProps) {
    return <div style={{ position: "relative" }}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div style={{ height: "50px", width: "10px", background: "black", position: "absolute", top: "0px", right: "0px"}}/>
        <div style={{ height: "10px", width: "200px", background: "black", marginLeft: "120px"}}/>
        <div style={{ height: "400px", width: "10px", background: "black", marginLeft: "120px"}}/>
        <div style={{ height: "10px", width: "250px", background: "black" }}/>
    </div>
}