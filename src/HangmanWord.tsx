type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}

export function HangmanWord({guessedLetters, wordToGuess, reveal}: HangmanWordProps) {
    return <div style={{ display: "flex", gap: "2rem", fontSize: "6rem", fontWeight: "bold", textTransform: "uppercase", fontFamily: "monospace"}}>
        {wordToGuess.split("").map((letter, index) => (
            <span style={{ borderBottom: "0.6rem solid black"}} key={index}>
                <span style={{
                    visibility: (guessedLetters.includes(letter) || reveal) ? "visible" : "hidden", 
                    color: (!guessedLetters.includes(letter) && reveal) ? "red" : "black"}}>
                    {letter}
                </span>
            </span>
        ))}
    </div>
}