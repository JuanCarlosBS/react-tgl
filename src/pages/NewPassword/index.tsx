import React, { useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { store } from 'react-notifications-component';

import Logo from '../../components/Logo'
import { Container, TitleText, FormAuthentication, Form, Input, SubmitButton, LinkSingUpButton } from './styles'
import api from '../../services/api'

interface ParamTypes {
    token: string;
}

const Register = () => {
    const passwordRef = useRef<HTMLInputElement>(null)
    const params = useParams<ParamTypes>()
    const history = useHistory()
    async function forgotPasswordHandler(e : React.FormEvent) {
        e.preventDefault()
        const password = passwordRef.current!.value
        const data = {
            password,
            password_confirmation: password,
            token: params.token
        }
        try {
            const res = await api.put('passwords', data)
            store.addNotification({
                title: 'Success',
                message: 'Senha atualizada',
                type: 'success',
                container: 'top-center',
                insert: "top",
                animationIn: ['animated', 'fadeIn'],
                animationOut: ['animated', 'fadeOut'],
                dismiss: {
                    duration: 2000
                },
            })
            history.push('/')
        } catch (err) {
            store.addNotification({
                title: 'Error',
                message: 'Token invalido.',
                type: 'danger',
                container: 'top-center',
                insert: "top",
                animationIn: ['animated', 'fadeIn'],
                animationOut: ['animated', 'fadeOut'],
                dismiss: {
                    duration: 2000
                },
            })
        }
        

    }
    return (
        <Container>
            <Logo />
            <FormAuthentication>
                <TitleText>New Password</TitleText>
                <Form onSubmit={forgotPasswordHandler}>
                    <Input type="password" placeholder="Password" ref={passwordRef}/>
                    <SubmitButton>Send Password</SubmitButton>
                </Form>
                <LinkSingUpButton to="/">Back</LinkSingUpButton>
            </FormAuthentication>
        </Container>
    )
}

export default Register