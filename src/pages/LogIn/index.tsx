import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { useHistory } from 'react-router-dom'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import 'animate.css'
import { store } from 'react-notifications-component';

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

    function handleLogin() {
        const email = emailRef.current!.value
        const password = passwordRef.current!.value
        const userExists = users.map(user =>{
            if (user.email == email  && user.password == password) {
                history.push(`/recent-games/${user.id}`)
                return user
            }
        }
        )
        if(userExists[0] === undefined) {
            store.addNotification({
                title: 'Error',
                message: 'Falha no LogIn',
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
                <Form>
                    <Input type="email" placeholder="Email" ref={emailRef}/>
                    <LastInput type="password" placeholder="Password" ref={passwordRef}/>
                    <SectionForgotPassword>
                        <LinkForgotPassword to='/forgot-password'>I forgot my password</LinkForgotPassword>
                    </SectionForgotPassword>
                    <SubmitButton onClick={handleLogin}>Log In</SubmitButton>
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