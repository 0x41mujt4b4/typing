import React, {useRef, useReducer} from 'react'
// import Word from './Word'
import './Text.css'
import './style.css'
import Input from './Input'
import {Howl} from 'howler'
import keySound from '../assets/audio/1.mp3'

const soundPlay = (src) => {
    const sound = new Howl({src})
    sound.play()
}

const Text = ({wordsList}) => {
    console.log('text rendered')
    const textList = [...wordsList.join(' ')].map((letter, index) => <div className={'letter'} key={index}>{letter}</div>)
    const text = wordsList.join(' ')
    const textReducer = (state, action) => {
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
    const [textState, dispatchText] = useReducer(textReducer, {textList: textList, input: ''})
    const inputRef = useRef()
    const keyPressHandler = (event) => {
        dispatchText({type: 'keyPress', input: event.target.value})
        soundPlay(keySound)
        }

    return(
        <div className="textInput">
            <Input ref={inputRef} onChange={keyPressHandler} />
            <div className='text' onClick={() => inputRef.current.focus()}>
                {textState.textList}
            </div>
        </div>
    )
}


export default Text