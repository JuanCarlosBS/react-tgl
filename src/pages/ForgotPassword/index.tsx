import React,{ Fragment } from 'react';

import Logo from '../../components/Logo'
import { Container, TitleText, FormAuthentication, Form, Input, SubmitButton, LinkSingUpButton, LastInput } from './styles'

const Register = () => {
    return (
        <Container>
            <Logo />
            <FormAuthentication>
                <TitleText>Reset Password</TitleText>
                <Form>
                    <Input placeholder="Email" />
                    <SubmitButton>Send link</SubmitButton>
                </Form>
                <LinkSingUpButton to="/">Back</LinkSingUpButton>
            </FormAuthentication>
        </Container>
    )
}

export default Register