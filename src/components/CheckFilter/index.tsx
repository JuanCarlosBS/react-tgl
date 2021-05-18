import React from 'react';

import {CheckBox} from './styles'

const CheckFilter: React.FC = (props) => {
    return (
            <CheckBox>{props.children}</CheckBox>
    )
}

export default CheckFilter