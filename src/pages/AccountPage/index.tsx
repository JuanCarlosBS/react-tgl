import React from 'react';

import Header from '../../components/Header'
import { Container } from './styles'
import { useParams } from 'react-router-dom'


interface ParamTypes {
    userId: string
}

const Account = () => {
    const params = useParams<ParamTypes>()
    return(
        <Container>
            <Header idUser={params.userId}/>
        </Container>
    )
}