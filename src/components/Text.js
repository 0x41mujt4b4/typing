import React, {useState, useRef, useEffect, useReducer} from 'react'
// import Word from './Word'
import './Text.css'
import './style.css'
import Input from './Input'
import {Howl, Howler} from 'howler'
import keySound from '../assets/audio/1.mp3'

const soundPlay = (src) => {
    const sound = new Howl({src})
    sound.play()}


        // return {text: state.text, input: action.payload}


const Text = ({wordsList}) => {
    const textList = [...wordsList.join(' ')].map((letter, index) => <div className={'letter'} key={index}>{letter}</div>)
    const text = wordsList.join(' ')
    const textReducer = (state, action) => {
        const text = wordsList.join(' ')
        console.log(action.input)
        let inputText = [...action.input].map((letter, index) => {
            if ((index < action.input.length) && (action.input[index] === text[index]))
            return <div className={'letter correct'} key={index}>{letter}</div>
            if ((index < action.input.length) && (action.input[index] !== text[index]))
            return <div className={'letter wrong'} key={index}>{text[index]}</div>
        })
        return {
                textList: [...inputText,
                    <div className={'letter'} style={{textDecoration: 'underline'}} key={action.input.length}>{text[action.input.length]}</div>,
                    ...textList.slice(action.input.length+1)],
                input: action.input}
        }
    console.log('text rendered')
    console.log('random words: ', text)
    const [textState, dispatchText] = useReducer(textReducer, {textList: textList, input: ''})
    // const [input, setInput] = useState('')
    // const [words, setWords] = useState(textList)
    const inputRef = useRef()

    const keyPressHandler = (event) => {
        dispatchText({type: 'keyPress', input: event.target.value})
        // setWords(prev => )
        // setInput(event.target.value)
        soundPlay(keySound)
        }
        // useEffect(() => {
        //     dispatchText({type: 'keyPress', input: ''})
        // },[])
    // useEffect(() => {
                    
    //             // if (index === input.length)
    //             // return [...prev.slice(input.length),
    //             // <div className={'letter'} style={{textDecoration: 'underline'}} key={index}>{letter}</div>,
    //             // ...prev.slice(input.length+1)]
    // }, [input])
    // useEffect(() => {
    //     setWords(text.split(' ').map((word, index) => {
    //         const style = index === wordIndex ? 'word active' : 'word'
    //         return <Word word={word} index={index} key={index} className={style} input={input}/>
    //     }))
    //     // return () => setWords(words)
    // }, [input, text, wordIndex])

    Howler.volume(1.0)
    return(
        <div className="textInput">
            <Input ref={inputRef} onChange={keyPressHandler}/>
            <div className='text' onClick={() => inputRef.current.focus()}>
                {textState.textList}
            </div>
        </div>
    )
}


export default Text