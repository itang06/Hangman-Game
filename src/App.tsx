import { useState, useEffect } from "react";
import words from "./wordList.json"
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

  function addGuessedLetter(letter: string) {
    if (guessedLetters.includes(letter) || isLoser || isWinner) {
      return
    } else {
      setGuessedLetters(currentLetters => [...currentLetters, letter])
    }
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if (!key.match(/^[a-z]$/)) {
        return
      } else {
        e.preventDefault()
        addGuessedLetter(key)
      }
    }

    document.addEventListener("keydown", handler)

    return () => {
      document.removeEventListener("keydown", handler)
    }
  }, [])

  console.log(wordToGuess)
  return <div style={{
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    margin: "0 auto",
    alignItems: "center"
  }}>
    <div style={{ fontSize: "2rem", textAlign: "center" }}>
      {isWinner ? "You winnnnn - refresh to try again" : isLoser ? "You loooooose - refresh to try again" : null}
    </div>
    <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
    <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
    <div style={{ alignSelf: "stretch"}}>
    <Keyboard 
      disabled={isWinner || isLoser}
      activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
      inactiveLetters={incorrectLetters}
      addGuessedLetter={addGuessedLetter}
    />
    </div>
  </div>
};

export default App
