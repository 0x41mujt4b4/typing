import React from 'react'
import './Letter.css'

const Letter = ({value, input, input_length, index}) => {
    // console.log(input)
    let style = !input ? 'letter' : input === value ? 'letter correct' : 'letter wrong'
    let underline = input_length === index ? 'underline' : ''
    return (
        <div className={style} key={index} style={{textDecoration: underline}}>{value}</div>
    )
}

export default Letter