import React, { Fragment } from 'react'
import { Container,Content, Menu, Logo, Divider, Subline, TextMenuFirst, LinkMenu, LinkMenuFirst } from './styles'

const Header : React.FC<{idUser: string}> = (props) => {
    return (
        <Fragment>
            <Container>
            <Content>
                <Menu>
                    <TextMenuFirst>
                        <Logo>TGL</Logo>
                        <Subline></Subline>
                    </ TextMenuFirst>
                    <LinkMenu to={'/recent-games/' + props.idUser} >Home</LinkMenu>
                </Menu>
                <Menu>
                    <LinkMenuFirst to={'/user/' + props.idUser}>Account</ LinkMenuFirst>
                    <LinkMenu to='/'>Sair</LinkMenu>
                </Menu>
            </Content>
            </Container>
            <div>
                <Divider></Divider>
            </div>
        </Fragment>
    )
}

export default Header