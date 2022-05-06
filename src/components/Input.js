import React, {useRef, useImperativeHandle} from 'react';
import './Input.css'

const Input = React.forwardRef(({onChange}, ref) => {
    const inputRef = useRef()
    const focus = () => {
        inputRef.current.focus()
    }
    useImperativeHandle(ref, () => {
        return {focus: focus}
    })
    return (
        <input autoFocus type="text" className="input" ref={inputRef} onChange={onChange}/>
    )
})

export default Input