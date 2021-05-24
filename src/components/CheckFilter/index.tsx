import React from 'react';

import {CheckBox} from './styles'

const CheckFilter: React.FC<{ selectFilter: (gameValue: number) => void, firstColor: string, secondColor: string, value: number}> = (props) => {
    
    return (
            <CheckBox onClick={() => {props.selectFilter(props.value)}} style={{color: props.secondColor, border: `2px solid ${props.firstColor === '#fff' ? props.secondColor : props.firstColor}`, backgroundColor: props.firstColor}}>{props.children}</CheckBox>
    )   
}

export default CheckFilter