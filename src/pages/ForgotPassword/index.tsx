import React, { useRef } from 'react';
import { store } from 'react-notifications-component';
import { useHistory } from 'react-router-dom'


import Logo from '../../components/Logo'
import { Container, TitleText, FormAuthentication, Form, Input, SubmitButton, LinkSingUpButton } from './styles'
import api from '../../services/api'


const Register = () => {
    const emailRef = useRef<HTMLInputElement>(null)
    const history = useHistory()
    
    async function forgotPasswordHandler(e: React.FormEvent) {
        e.preventDefault()
        const email = emailRef.current!.value
        const data = {
            email,
            redirect_url: 'http://localhost:3000/new-password'
        }
        try {
            const res = await api.post('passwords', data)
            store.addNotification({
                title: 'Success',
                message: `Email foi enviado`,
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
                message: `Email não existe`,
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
            <FormAuthentication >
                <TitleText>Reset Password</TitleText>
                <Form onSubmit={forgotPasswordHandler}>
                    <Input type="email" placeholder="Email" ref={emailRef}/>
                    <SubmitButton type="submit" >Send link</SubmitButton>
                </Form>
                <LinkSingUpButton to="/">Back</LinkSingUpButton>
            </FormAuthentication>
        </Container>
    )
}

export default Register