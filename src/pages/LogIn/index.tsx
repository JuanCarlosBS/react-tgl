import React from 'react';

import { Container, Logo, ForLogo, LogoFirstText, LogoForText, LogoSecondText, TitleText } from './styles'

const LogIn = () => {
    return (
        <Container>
            <Logo>
                <LogoFirstText>The</LogoFirstText>
                <LogoFirstText>Geatest</LogoFirstText>
                <LogoFirstText>App</LogoFirstText>
                <ForLogo>
                    <LogoForText>for</LogoForText>
                </ForLogo>
                <div>
                    <LogoSecondText>LOTTERY</LogoSecondText>
                </div>
            </Logo>
        </Container>
    )
}

export default LogIn