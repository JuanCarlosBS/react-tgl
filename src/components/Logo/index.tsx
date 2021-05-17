import React, { Fragment } from 'react'

import { Container, LogoFirstText, ForLogo, LogoForText, LogoSecondText} from './styles'

const Logo : React.FC = () => {
    return (
        <Container>
            <LogoFirstText>The</LogoFirstText>
            <LogoFirstText>Geatest</LogoFirstText>
            <LogoFirstText>App</LogoFirstText>
            <ForLogo>
                <LogoForText>for</LogoForText>
            </ForLogo>
            <Fragment>
                <LogoSecondText>LOTTERY</LogoSecondText>
            </Fragment>
        </Container>
    )
}

export default Logo