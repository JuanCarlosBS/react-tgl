import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { useHistory } from 'react-router-dom';
import 'animate.css'
import { store } from 'react-notifications-component';

import Logo from '../../components/Logo'
import { Container, TitleText, FormAuthentication, Form, Input, SubmitButton, LinkSingUpButton, LastInput } from './styles'
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

const Register = (props: Props) => {
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const history = useHistory<string>()
    const { loadRequest } = props
    const { users } = props

    loadRequest()

    function handleRegister() {
        const name = nameRef.current!.value
        const email = emailRef.current!.value
        const password = passwordRef.current!.value
        const userExists = users.map(user =>{
            if (user.email === email) {
                store.addNotification({
                    title: 'Error',
                    message: 'Usuario já existe.',
                    type: 'danger',
                    container: 'top-center',
                    insert: "top",
                    animationIn: ['animated', 'fadeIn'],
                    animationOut: ['animated', 'fadeOut'],
                    dismiss: {
                        duration: 2000
                    },
                })
                return true
            }
        })
        if(userExists.length === 0) {
            users.push({
                id: Math.random().toString(),
                name,
                email,
                password
            })
            history.push('/')
        }
    }

    return (
        <Container>
            <Logo />
            <FormAuthentication>
                <TitleText>Registration</TitleText>
                <Form>
                    <Input placeholder="Name" ref={nameRef}/>
                    <LastInput type='email' placeholder="Email" ref={emailRef}/>
                    <LastInput type='password' placeholder="Password" ref={passwordRef}/>
                    <SubmitButton onClick={handleRegister}>Register</SubmitButton>
                </Form>
                <LinkSingUpButton to="/">Back</LinkSingUpButton>
            </FormAuthentication>
        </Container>
    )
}

const mapStateToProps = (state: ApplicationState) => ({
    users: state.users.data,
  });
  
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(usersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Register)