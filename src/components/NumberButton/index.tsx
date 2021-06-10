import React from 'react'

import { NumbersButton } from './styles'
const NumberButton: React.FC<{ activeNumber: (number: number[]) => void, value: number, color: string }> = (props) => {
    return (
        <NumbersButton onClick={() => {props.activeNumber([props.value])}} style={{ backgroundColor: props.color, border: `1px solid ${props.color}`}}>{props.children}</NumbersButton>
    )
}

export default NumberButton