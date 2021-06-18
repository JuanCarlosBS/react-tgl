import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import 'animate.css'
import { store } from 'react-notifications-component';

import Header from '../../components/Header'
import { Container, Content, Input, Button, Title, P, SubTitle } from './styles'
import { useParams } from 'react-router-dom'
import * as usersActions from '../../store/ducks/users/actions';
import { ApplicationState } from '../../store';
import { user } from '../../store/ducks/users/types';
import api from '../../services/api'

interface StateProps {
    users: user[]
}

interface DispatchProps {
    loadRequest(): void
}

interface ParamTypes {
    userId: string
}

interface UserType {
    username: string;
    email: string
}

type Props = StateProps & DispatchProps

const Account = (props:Props) => {
    const params = useParams<ParamTypes>()
    const { loadRequest } = props
    const {users} = props
    const [user, setUser]  = useState<UserType>()
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)
    const userIndex = localStorage.getItem('userIndex')
    const userId = localStorage.getItem('userId')

    loadRequest()

    useEffect(() => {
        async function getUser() {
            const res = await api.get('users/'+ userIndex)
            setUser(res.data)
        }
        getUser()
    })

    async function updateHandle(e: React.FormEvent) {
        e.preventDefault()
        const email = emailRef.current!.value
        const password = passwordRef.current!.value
        const name = nameRef.current!.value
        const data = {
            username: name,
            email: email,
            password: password
        }

        try {
            const res = await api.put(`users/${userIndex}`, data, { 
                headers: {
                    Authorization: `Bearer ${userId}`,
            }})
    
            console.log(res.data)
    
            store.addNotification({
                title: 'Success',
                message: 'O usuário foi atualizado',
                type: 'success',
                container: 'top-center',
                insert: "top",
                animationIn: ['animated', 'fadeIn'],
                animationOut: ['animated', 'fadeOut'],
                dismiss: {
                    duration: 2000
                },
            })
        } catch (err) {
            store.addNotification({
                title: 'Erro',
                message: 'Tivemos um problema para atualizar',
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

    return(
        <React.Fragment>
            <Header idUser={params.userId}/>
            <Container>
                <Content>
                    <Title>User</Title>
                    <SubTitle>Username</SubTitle>
                    <P>{user?.username}</P>
                    <SubTitle>Email</SubTitle>
                    <P>{user?.email}</P>
                    <form onSubmit={updateHandle}>
                    <Input type="text" placeholder="Name" ref={nameRef}/>
                    <Input type="email"placeholder="Email" ref={emailRef}/>
                    <Input type="password" placeholder="Confirm Password" ref={passwordRef}/>
                    <Button type="submit" >Atualizar dados</Button>
                    </form>
                </Content>
            </Container>
        </React.Fragment>

    )
}

const mapStateToProps = (state: ApplicationState) => ({
    users: state.users.data,
  });
  
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(usersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Account)