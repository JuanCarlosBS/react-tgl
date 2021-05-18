import React from 'react'

import { NumbersButton } from './styles'
const NumberButton: React.FC = (props) => {
    return (
        <NumbersButton>{props.children}</NumbersButton>
    )
}

export default NumberButton