import React, { Fragment } from 'react'
import { Container, Menu, Logo, Divider, Subline, TextMenuFirst, LinkMenu } from './styles'

const Header : React.FC = () => {
    return (
        <Fragment>
            <Container>
                <Menu>
                    <TextMenuFirst><Logo>TGL</Logo></ TextMenuFirst>
                    <LinkMenu to='/recent-games' >Home</LinkMenu>
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