import React,{ Fragment } from 'react';

import { Container, Logo, ForLogo, LogoFirstText, LogoForText, LogoSecondText, TitleText, FormAuthentication, Form, InputEmail } from './styles'

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
                <Fragment>
                    <LogoSecondText>LOTTERY</LogoSecondText>
                </Fragment>
            </Logo>
            <FormAuthentication>
                <TitleText>Authentication</TitleText>
                <Form>
                    <InputEmail/>
                </Form>
            </FormAuthentication>
        </Container>
    )
}

export default LogIn