import React, { Fragment } from 'react'
import { Container, Menu, Logo, Divider, Subline, TextMenu, TextMenuFirst }from './styles'

const Header : React.FC = () => {
    return (
        <Fragment>
            <Container>
                <Logo>TGL</Logo>
                <Menu>
                    <TextMenuFirst>Account</ TextMenuFirst>
                    <TextMenu>Sair</TextMenu>
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