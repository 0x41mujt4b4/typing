import React, { useState } from 'react';
import Letter from './Letter'
import './Word.css'


const Word = ({word, index, input, className}) => {
    console.log(input)
    const enteredWords = input.split(' ')
    const [wordLetters, setWordLetters] = useState(word.split(''))
    const letters = wordLetters.map((letter, letterIndex) => {
        // check word index is less than the text length and letter index is less than the word length
        if (index < enteredWords.length && letterIndex < enteredWords[index].length)
            return <Letter value={letter} index={letterIndex} key={letterIndex} input={enteredWords[index][letterIndex]} input_length={input.length-1}/>
        // if (index < enteredWords.length && letterIndex > enteredWords[index].length)
        // {
        //     // setWordLetters(prev => prev.concat(input.slice(prev.length).split('')))
        //     // return <Letter value={letter} index={letterIndex} key={letterIndex} input=''/>
        // }
        else {
            return <Letter value={letter} index={letterIndex} key={letterIndex} input='' />
        }
            })
    return(
        <div className={className} key={index} >
            {letters}
        </div>
    )}
export default Word