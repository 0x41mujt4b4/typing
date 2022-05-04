import React, {useState, useRef, useEffect} from 'react'
import Word from './Word'
import './Text.css'
import './style.css'
import Input from './Input'

const Text = ({text}) => {
    // eslint-disable-next-line
    const [wordIndex, setWordIndex] = useState(0)
    // const [letterIndex, setLetterIndex] = useState(0)
    const textList = [...text].map((letter, index) => <div className={'letter'} key={index}>{letter}</div>)
    const [input, setInput] = useState('')
    const [words, setWords] = useState(textList)
    const inputRef = useRef()
    const keyPressHandler = (event) => {
        setInput(event.target.value)

        }
    
    useEffect(() => {
        setWords(prev => {
                    let inputText = [...input].map((letter, index) => {
                    if ((index < input.length) && (input[index] === text[index]))
                    return <div className={'letter correct'} key={index}>{letter}</div>
                    if ((index < input.length) && (input[index] !== text[index]))
                    return <div className={'letter wrong'} key={index}>{text[index]}</div>
                })
                return [...inputText,
                        <div className={'letter'} style={{textDecoration: 'underline'}} key={input.length}>{text[input.length]}</div>,
                        ...textList.slice(input.length+1)]
             // const style = index === wordIndex ? 'word active' : 'word'
             // return <Word word={word} index={index} key={index} className={'word'} input={input}/>
                  })            
                // if (index === input.length)
                // return [...prev.slice(input.length),
                // <div className={'letter'} style={{textDecoration: 'underline'}} key={index}>{letter}</div>,
                // ...prev.slice(input.length+1)]
    }, [input])
    // useEffect(() => {
    //     setWords(text.split(' ').map((word, index) => {
    //         const style = index === wordIndex ? 'word active' : 'word'
    //         return <Word word={word} index={index} key={index} className={style} input={input}/>
    //     }))
    //     // return () => setWords(words)
    // }, [input, text, wordIndex])


    return(
        <div className="textInput">
            <Input ref={inputRef} onChange={keyPressHandler}/>
            <div className='text' onClick={() => inputRef.current.focus()}>
                {words}
            </div>
        </div>
    )
}


export default Text