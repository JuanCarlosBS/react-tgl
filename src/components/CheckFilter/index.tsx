import React from 'react';

import {CheckBox} from './styles'

const CheckFilter: React.FC<{ onClick: () => void }> = (props) => {
    return (
            <CheckBox onClick={props.onClick}>{props.children}</CheckBox>
    )
}

export default CheckFilter