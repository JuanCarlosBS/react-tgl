import React from 'react';

import {CheckBox} from './styles'

const CheckFilter: React.FC<{ selectFilter: (gameValue: number) => void, color: string, value: number}> = (props) => {
    
    return (
            <CheckBox onClick={() => {props.selectFilter(props.value)}} style={{color: props.color, border: `2px solid ${props.color}`}}>{props.children}</CheckBox>
    )   
}

export default CheckFilter