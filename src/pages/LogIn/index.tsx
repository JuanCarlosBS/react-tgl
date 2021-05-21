import React from 'react';

import Logo from '../../components/Logo'
import { Container, TitleText, FormAuthentication, Form, Input, LinkForgotPassword, SectionForgotPassword, SubmitButton, LinkSingUpButton, LastInput } from './styles'

const LogIn = () => {
    return (
        <Container>
            <Logo />
            <FormAuthentication>
                <TitleText>Authentication</TitleText>
                <Form>
                    <Input placeholder="Email" />
                    <LastInput placeholder="Password" />
                    <SectionForgotPassword>
                        <LinkForgotPassword to='/forgot-password'>I forgot my password</LinkForgotPassword>
                    </SectionForgotPassword>
                    <SubmitButton to='/recent-games'>Log In</SubmitButton>
                </Form>
                <LinkSingUpButton to='/register'>Sign Up</LinkSingUpButton>
            </FormAuthentication>
        </Container>
    )
}

export default LogIn