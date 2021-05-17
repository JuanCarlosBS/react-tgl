import React,{ Fragment } from 'react';

import Logo from '../../components/Logo'
import { Container, TitleText, FormAuthentication, Form, Input, Link, SectionForgotPassword, SubmitButton, LinkSingUpButton, LastInput } from './styles'

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