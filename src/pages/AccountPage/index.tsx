import React, { useRef } from 'react';
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

interface StateProps {
    users: user[]
}

interface DispatchProps {
    loadRequest(): void
}

interface ParamTypes {
    userId: string
}

type Props = StateProps & DispatchProps

const Account = (props:Props) => {
    const params = useParams<ParamTypes>()
    const { loadRequest } = props
    const { users } = props
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const passwordConfRef = useRef<HTMLInputElement>(null)

    loadRequest()

    function updateHandle() {
        const email = emailRef.current!.value
        const password = passwordRef.current!.value
        const passwordConf = passwordConfRef.current!.value
        if ( password !== passwordConf ) {
            return 
        }
        users.map((user, index) => {
            if (user.id === params.userId) {
                users[index] = { id : params.userId, name: user.name, email: email, password: password }
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
            }
        }
        )
    }

    return(
        <React.Fragment>
            <Header idUser={params.userId}/>
            <Container>
                <Content>
                    <Title>User</Title>
                    <SubTitle>Username</SubTitle>
                    <P>{users.map(user =>{
                        if (user.id === params.userId) {
                            return user.name
                        }
                    })}</P>
                    <SubTitle>Email</SubTitle>
                    <P>{users.map(user =>{
                        if (user.id === params.userId) {
                            return user.email
                        }
                    })}</P>
                    
                    <Input type="email" placeholder="Email" ref={emailRef}/>
                    <Input type="password"placeholder="Password" ref={passwordRef}/>
                    <Input type="password" placeholder="Confirm Password" ref={passwordConfRef}/>
                    <Button onClick={updateHandle} >Atualizar dados</Button>
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