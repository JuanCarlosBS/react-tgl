import React from 'react';

import Logo from '../../components/Logo'
import { Container, TitleText, FormAuthentication, Form, Input, SubmitButton, LinkSingUpButton, LastInput } from './styles'

const Register = () => {
    return (
        <Container>
            <Logo />
            <FormAuthentication>
                <TitleText>Registration</TitleText>
                <Form>
                    <Input placeholder="Name" />
                    <LastInput placeholder="Email" />
                    <LastInput placeholder="Password" />
                    <SubmitButton>Register</SubmitButton>
                </Form>
                <LinkSingUpButton to="/">Back</LinkSingUpButton>
            </FormAuthentication>
        </Container>
    )
}

export default Register