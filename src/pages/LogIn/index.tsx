import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { useHistory } from 'react-router-dom'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import 'animate.css'
import { store } from 'react-notifications-component';
import api from '../../services/api'

import Logo from '../../components/Logo'
import { Container, TitleText, FormAuthentication, Form, Input, LinkForgotPassword, SectionForgotPassword, SubmitButton, LinkSingUpButton, LastInput } from './styles'
import * as usersActions from '../../store/ducks/users/actions';
import { ApplicationState } from '../../store';
import { user } from '../../store/ducks/users/types';

interface StateProps {
    users: user[]
}

interface DispatchProps {
    loadRequest(): void
}

type Props = StateProps & DispatchProps

const LogIn = (props: Props) => {
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const history = useHistory<string>()
    const { loadRequest } = props
    const { users } = props

    loadRequest()

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault()  

        try {
            const data = {
                email: emailRef.current!.value,
                password: passwordRef.current!.value,
            }
            
            const res = await api.post('sessions', data);
            
            const { token } = res.data
            console.log(token)
            localStorage.setItem('userId', token)
            history.push('/recent-games/'+ token)
        } catch (err) {
            store.addNotification({
                title: 'Error',
                message: 'Falha no login.',
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
                <TitleText>Authentication</TitleText>
                <Form onSubmit={handleLogin}>
                    <Input type="email" placeholder="Email" ref={emailRef}/>
                    <LastInput type="password" placeholder="Password" ref={passwordRef}/>
                    <SectionForgotPassword>
                        <LinkForgotPassword to='/forgot-password'>I forgot my password</LinkForgotPassword>
                    </SectionForgotPassword>
                    <SubmitButton >Log In</SubmitButton>
                </Form>
                <LinkSingUpButton to='/register'>Sign Up</LinkSingUpButton>
            </FormAuthentication>
        </Container>
    )
}

const mapStateToProps = (state: ApplicationState) => ({
    users: state.users.data,
  });
  
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(usersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)