import React, { Fragment } from 'react'
import Header from '../../components/Header'

import { Container, Content, Game, TitlePage, TitlePageBold, TitleGame, Filters, DescriptionGame, Numbers, Submit, GamesButton, SubmitButton, Cart, GameCart, Items, Item, Image, Bar, ItemContent, GameNamePrice, GameNamePriceText, GameNamePriceTextBold, ButtonSave } from './styles'
import CheckFilter from '../../components/CheckFilter'
import NumberButton from '../../components/NumberButton'

const NewBet : React.FC = () => {
    return (
        <Fragment>
            <Header />
        <Container>
            <Content>
                <Game>
                    <TitlePage><TitlePageBold>NEW BET</TitlePageBold> FOR MEGA-SENA </TitlePage>
                    <TitleGame>Choose a game</TitleGame>
                    <Filters>
                    </Filters>
                    <div>
                        <TitleGame>Fill your bet</TitleGame>
                        <DescriptionGame>Mark as many numbers as you want up to a maximum of 50. Win by hitting 15, 16, 17, 18, 19, 20 or
                            none of the 20 numbers drawn.</DescriptionGame>
                    </div>
                    <Numbers>
                        <NumberButton>01</NumberButton>
                        <NumberButton>02</NumberButton>
                        <NumberButton>03</NumberButton>
                        <NumberButton>04</NumberButton>
                        <NumberButton>05</NumberButton>
                        <NumberButton>06</NumberButton>
                        <NumberButton>07</NumberButton>
                        <NumberButton>08</NumberButton>
                        <NumberButton>09</NumberButton>
                        <NumberButton>10</NumberButton>
                    </Numbers>
                    <Submit>
                        <div >
                            <GamesButton>Complete game</GamesButton>
                            <GamesButton>Clear game</GamesButton>
                        </div>
                        <div>
                            <SubmitButton>Add to Cart</SubmitButton>
                        </div>
                    </Submit>
                </Game>
                <Cart>
                    <GameCart>
                        <TitlePage>CART</TitlePage>
                        <Items>
                        </Items>
                        <div>
                         <TitlePage><b>CART</b> TOTAL:</TitlePage>
                        </div>
                    </GameCart>
                    <ButtonSave>Save ❯</ButtonSave>
                </Cart>
            </Content>
        </Container>
        </Fragment>
    )  
}

export default NewBet