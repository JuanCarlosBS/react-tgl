import React,{ Fragment } from 'react';

import { Container, Logo, ForLogo, LogoFirstText, LogoForText, LogoSecondText, TitleText, FormAuthentication, Form, InputEmail, Link, SectionForgotPassword, SubmitButton, LinkSingUpButton, LastInput } from './styles'

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
                    <InputEmail placeholder="Email" />
                    <LastInput placeholder="Password" />

                    <SectionForgotPassword>
                        <Link>I forgot my password</Link>
                    </SectionForgotPassword>
                    <SubmitButton>Log In</SubmitButton>
                </Form>
                <LinkSingUpButton>Sign Up</LinkSingUpButton>
            </FormAuthentication>
        </Container>
    )
}

export default LogIn