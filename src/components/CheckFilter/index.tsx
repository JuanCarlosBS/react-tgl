import React from 'react';

import {CheckBox} from './styles'

const CheckFilter: React.FC<{ onClick: () => void, color: string}> = (props) => {
    return (
            <CheckBox onClick={props.onClick} style={{color: props.color, border: `2px solid ${props.color}`}}>{props.children}</CheckBox>
    )
}

export default CheckFilter