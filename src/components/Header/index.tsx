import React, { Fragment } from 'react'
import { Container, Menu, Logo, Divider, Subline, TextMenuFirst, LinkMenu } from './styles'

const Header : React.FC<{idUser: string}> = (props) => {
    return (
        <Fragment>
            <Container>
                <Menu>
                    <TextMenuFirst><Logo>TGL</Logo></ TextMenuFirst>
                    <LinkMenu to={'/recent-games/' + props.idUser} >Home</LinkMenu>
                </Menu>
                <Menu>
                    <TextMenuFirst>Account</ TextMenuFirst>
                    <LinkMenu to='/'>Sair</LinkMenu>
                </Menu>
            </Container>
            <div>
                <Divider></Divider>
                <Subline></Subline>
            </div>
        </Fragment>
    )
}

export default Header